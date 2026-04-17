-- Alter score columns to store fractional values.
ALTER TABLE "ScoreRun"
ALTER COLUMN "score" TYPE DOUBLE PRECISION USING "score"::DOUBLE PRECISION;

ALTER TABLE "LeaderboardEntry"
ALTER COLUMN "bestScore" TYPE DOUBLE PRECISION USING "bestScore"::DOUBLE PRECISION;
