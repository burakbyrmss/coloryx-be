import { authRoutes } from "./v1/auth.js";
import { meRoutes } from "./v1/me.js";
import { scoresRoutes } from "./v1/scores.js";
import { leaderboardsRoutes } from "./v1/leaderboards.js";
import { savesRoutes } from "./v1/saves.js";
export const routes = async (app) => {
    await app.register(authRoutes, { prefix: "/v1/auth" });
    await app.register(meRoutes, { prefix: "/v1" });
    await app.register(scoresRoutes, { prefix: "/v1" });
    await app.register(leaderboardsRoutes, { prefix: "/v1" });
    await app.register(savesRoutes, { prefix: "/v1" });
};
//# sourceMappingURL=index.js.map