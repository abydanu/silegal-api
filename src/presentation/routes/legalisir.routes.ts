import { Hono } from "hono";
import { LegalisirController } from "../controllers/LegalisirController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export function createLegalisirRoutes(legalisirController: LegalisirController) {
  const app = new Hono();

  app.post("/", (c) => legalisirController.create(c));
  app.get("/", authMiddleware, (c) => legalisirController.getList(c));
  app.get("/:id", authMiddleware, (c) => legalisirController.getById(c));
  app.put("/:id", authMiddleware, (c) => legalisirController.update(c));
  app.delete("/:id", authMiddleware, (c) => legalisirController.delete(c));

  return app;
}