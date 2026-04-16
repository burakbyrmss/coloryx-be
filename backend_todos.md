## Coloryx Backend TODOs (PostgreSQL + Fastify + Prisma)

This backlog is **post-MVP**: the design doc enforces **MVP is fully offline** and “no backend”.

---

## 0) Decisions to lock (before coding)

- **Auth strategy (LOCKED): Option B**
  - Anonymous device identity first → optional account upgrade later
- **Define leaderboard policy**
  - Best-per-user-per-mode only, or store all runs and derive “best”
  - Cheating/abuse policy (what gets rejected vs flagged)
- **Define cloud-save scope**
  - What gets synced (best scores, settings, streak, etc.)
  - Conflict strategy (last-write-wins vs versioned merge)
- **Define analytics scope**
  - What events are collected
  - Retention period + whether to anonymize by default

**Acceptance criteria**
- Document choices in `backend_todos.md` under “Decisions locked” with rationale and data contracts.

---

## 1) Project scaffolding (Fastify service)

- **Initialize Node.js project**
  - TypeScript setup, build + start scripts
  - Strict typechecking
- **Fastify app skeleton**
  - Central `app` builder + `server` entrypoint
  - Request-id, structured logging, global error handler
- **Config & env**
  - `.env.example`
  - Typed config validation (fail fast on boot)
- **Health endpoints**
  - `GET /health` (basic liveness)
  - `GET /ready` (DB connectivity)
- **Dev environment**
  - Docker Compose for Postgres
  - Local run instructions

**Acceptance criteria**
- `GET /health` returns 200 without DB.
- `GET /ready` returns 200 only when DB reachable.
- `npm run dev` starts server with logs and validated config.

---

## 2) Prisma + Postgres baseline (code-first migrations)

- **Add Prisma**
  - `schema.prisma` + `DATABASE_URL`
  - Migration workflow (dev/prod)
- **Create baseline migrations**
  - Initial schema migration
  - Seed scaffolding (optional)
- **Prisma client integration**
  - Singleton client, graceful shutdown hooks
  - DB error translation layer (map common constraint errors → HTTP 4xx)

**Acceptance criteria**
- `prisma migrate dev` works end-to-end on a fresh DB.
- Service boot connects and can run a trivial query.

---

## 3) Data model (initial)

> These models support accounts, cloud sync, scores, leaderboards, and optional analytics.

- **Model: `User`**
  - `id`, `createdAt`, `updatedAt`
- **Model: `AuthIdentity`**
  - `id`, `userId`, `provider`, `providerUserId`, `email?`, `createdAt`
  - Unique on (`provider`, `providerUserId`)
- **Model: `Device`**
  - `id`, `deviceId`, `platform`, `userId?`, `createdAt`, `lastSeenAt`
  - Unique on `deviceId`
- **Model: `ScoreRun`**
  - `id`, `userId`, `mode`, `score`, `metaJson`, `createdAt`
  - Index: (`mode`, `score`, `createdAt`)
  - Index: (`userId`, `mode`, `createdAt`)
- **Model: `LeaderboardEntry`** (recommended)
  - `id`, `mode`, `userId`, `bestScore`, `updatedAt`
  - Unique on (`mode`, `userId`)
- **Model: `CloudSave`**
  - `id`, `userId`, `payloadJson`, `version`, `updatedAt`
  - Unique on `userId`
- **Model: `Event`** (optional)
  - `id`, `userId?`, `deviceId?`, `name`, `propsJson`, `createdAt`
  - Index: (`name`, `createdAt`)
  - Index: (`createdAt`)

**Acceptance criteria**
- Prisma schema compiles; migrations apply cleanly.
- Uniqueness constraints prevent duplicate identities and duplicate leaderboard rows.

---

## 4) API conventions (versioning, validation, docs)

- **API versioning**
  - Prefix routes with `/v1`
- **Schema validation**
  - Use Fastify route schemas for body/query/params and responses
- **OpenAPI**
  - Generate Swagger/OpenAPI docs from route schemas
- **Pagination conventions**
  - Cursor-based pagination for leaderboards and score history
- **Error format**
  - Single consistent JSON error shape with machine-readable code

**Acceptance criteria**
- `/docs` (or equivalent) renders OpenAPI UI in dev.
- Invalid payloads are rejected with consistent 400 error shape.

---

## 5) Auth (tokens, sessions, guards)

- **Auth endpoints (Option B: anonymous device identity)**
  - `POST /v1/auth/device` (register/lookup device → app tokens)
  - `POST /v1/auth/refresh`
  - `POST /v1/auth/logout`
  - `POST /v1/auth/upgrade` (optional later: link Apple/Google/email to existing user)
- **Token strategy**
  - Short-lived access JWT
  - Refresh token rotation
  - Revocation mechanism (DB table or `jti` strategy)
- **Authorization hook**
  - `onRequest`/`preHandler` guard for authenticated routes
  - Attach `userId` (and `deviceId` if relevant) to request context
- **Device association**
  - Create/Update `Device` on `/v1/auth/device`; update `lastSeenAt`
  - Ensure `deviceId` uniqueness; decide whether to allow multiple users per device (recommended: no)

**Acceptance criteria**
- Authenticated request can call `GET /v1/me` and returns correct user.
- Calling `/v1/auth/device` with the same `deviceId` is idempotent and returns the same user.
- Refresh rotation invalidates previous refresh token.
- Logout prevents further refresh.

---

## 6) User & profile endpoints

- **Me endpoints**
  - `GET /v1/me`
  - `DELETE /v1/me` (account deletion)
- **GDPR-style deletion**
  - Delete or anonymize rows tied to the user (define policy)

**Acceptance criteria**
- Deleting user makes tokens unusable and removes leaderboard presence (or anonymizes per policy).

---

## 7) Scores & runs

- **Submit score**
  - `POST /v1/scores`
  - Validations:
    - `mode` in allowed set: `ODD_ONE_OUT`, `REMEMBER_COLOR` (or your chosen enum)
    - `score` range constraints (Remember Color: 0–100)
  - Persist `ScoreRun`
- **Read my scores**
  - `GET /v1/scores/me?mode=...&cursor=...&limit=...`

**Acceptance criteria**
- Invalid mode/score rejected with 400.
- Submitting a score creates a `ScoreRun` row.
- Pagination works and is stable.

---

## 8) Leaderboards

- **Public leaderboard**
  - `GET /v1/leaderboards?mode=...&cursor=...&limit=...`
- **My rank snapshot**
  - `GET /v1/leaderboards/me?mode=...`
- **Leaderboard update strategy**
  - On score submit:
    - Upsert `LeaderboardEntry` for user+mode if new score is higher
  - Decide tie-break rules (earlier timestamp wins, etc.)

**Acceptance criteria**
- Leaderboard is sortable and paginated.
- Submitting a higher score updates best score; lower score does not.

---

## 9) Cloud sync (saves)

- **Endpoints**
  - `GET /v1/saves/latest`
  - `PUT /v1/saves` (update save payload)
- **Concurrency control**
  - Use `version` incrementing (optimistic concurrency)
  - Reject stale updates with 409 Conflict and include current version

**Acceptance criteria**
- Two concurrent updates: stale one gets 409.
- Latest save returns payload + version.

---

## 10) Analytics (optional, post-MVP)

- **Batch ingestion**
  - `POST /v1/events/batch` (array of events)
- **Abuse controls**
  - Max batch size, max props size, rate limiting
- **Retention**
  - TTL policy and cleanup job

**Acceptance criteria**
- Large/invalid batches rejected with 400.
- Cleanup job can remove old events per retention policy.

---

## 11) Abuse prevention & basic anti-cheat

- **Rate limiting**
  - Per-IP and per-user/device for sensitive endpoints
- **Submission caps**
  - Optional daily caps per user/device
- **Suspicion flags**
  - Track suspicious patterns (extreme volume, impossible score patterns)
  - Decide: block vs flag for later review

**Acceptance criteria**
- Excess requests return 429 with retry hints.
- Caps behave deterministically.

---

## 12) Observability

- **Structured logs**
  - requestId, route, statusCode, latencyMs, userId (if present)
- **Metrics**
  - latency histograms, error rate, DB query timing
- **Error reporting**
  - Central capture for unhandled exceptions

**Acceptance criteria**
- Each request produces one structured summary log line.
- 5xx errors are captured with context.

---

## 13) Testing strategy

- **Unit tests**
  - Validators, auth token verification, pagination helpers
- **Integration tests**
  - Auth flow, score submit, leaderboard update, cloud save concurrency
- **Ephemeral Postgres for CI**
  - Apply migrations in test setup

**Acceptance criteria**
- `npm test` runs green on a clean machine.
- Integration tests run against migrated DB.

---

## 14) Deployment & CI

- **CI pipeline**
  - lint, typecheck, tests
  - prisma generate + migrate validation
- **Deploy pipeline**
  - Run migrations safely during deploy (document order)
  - Secrets and config management
- **Backups**
  - Automated Postgres backups + restore drill doc

**Acceptance criteria**
- CI fails on schema drift or broken migrations.
- Deployment procedure documented and repeatable.

---

## 15) Admin tooling (optional)

- **Admin-only endpoints**
  - Inspect suspicious users, leaderboard moderation (remove entries)
- **AuthZ**
  - Role/claim-based guard for admin routes

**Acceptance criteria**
- Non-admin users cannot access admin endpoints.

