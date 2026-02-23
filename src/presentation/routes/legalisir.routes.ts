import { Hono } from "hono";
import { LegalisirController } from "../controllers/LegalisirController";
import { authMiddleware } from "../middleware/auth.middleware";

export function createLegalisirRoutes(legalisirController: LegalisirController) {
  const app = new Hono();

  app.post("/", (c) => legalisirController.create(c));
  app.get("/", authMiddleware, (c) => legalisirController.getList(c));
  app.get("/:id", authMiddleware, (c) => legalisirController.getById(c));
  app.put("/:id", authMiddleware, (c) => legalisirController.update(c));
  app.delete("/:id", authMiddleware, (c) => legalisirController.delete(c));

  return app;
}
