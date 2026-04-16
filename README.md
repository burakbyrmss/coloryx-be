## Coloryx Backend (Fastify + Prisma + Postgres)

### Setup

- Copy env:

```bash
cp .env.example .env
```

- Start Postgres:

```bash
docker compose up -d
```

- Generate Prisma client:

```bash
npm run prisma:generate
```

- Run migrations (dev):

```bash
npm run prisma:migrate:dev
```

- Start API:

```bash
npm run dev
```

### Docs

- OpenAPI UI is served at `http://localhost:3000/docs`

### Auth (Option B: device identity)

- `POST /v1/auth/device` with `{ deviceId, platform }` returns `{ accessToken, refreshToken }`.
- Use `Authorization: Bearer <accessToken>` for protected endpoints.

