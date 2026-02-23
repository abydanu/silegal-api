import { Hono } from "hono";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middleware/auth.middleware";

export function createAuthRoutes(authController: AuthController) {
  const app = new Hono();

  app.post("/login", (c) => authController.login(c));
  app.post("/logout", authMiddleware, (c) => authController.logout(c));

  return app;
}
