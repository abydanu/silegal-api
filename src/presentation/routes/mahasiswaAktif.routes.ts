import { Hono } from "hono";
import { MahasiswaAktifController } from "../controllers/MahasiswaAktifController";
import { authMiddleware } from "../middleware/auth.middleware";

export function createMahasiswaAktifRoutes(mahasiswaAktifController: MahasiswaAktifController) {
  const app = new Hono();

  app.post("/", (c) => mahasiswaAktifController.create(c));
  app.get("/", authMiddleware, (c) => mahasiswaAktifController.getList(c));
  app.get("/:id", authMiddleware, (c) => mahasiswaAktifController.getById(c));
  app.put("/:id", authMiddleware, (c) => mahasiswaAktifController.update(c));
  app.delete("/:id", authMiddleware, (c) => mahasiswaAktifController.delete(c));

  return app;
}
