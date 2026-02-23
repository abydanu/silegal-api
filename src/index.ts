
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger as honoLogger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";

import logger from "./infrastructure/logging/logger";
import { container } from "./di/container";
import { createAuthRoutes } from "./presentation/routes/auth.routes";
import { createLegalisirRoutes } from "./presentation/routes/legalisir.routes";
import { createMahasiswaAktifRoutes } from "./presentation/routes/mahasiswaAktif.routes";
import { swaggerDocument } from "./presentation/openapi/swagger";

const app = new Hono();

app.use("*", honoLogger());
app.use(
  "*",
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (c) => c.json({ name: "Legalisir Api", version: "1.0.0", status: "running", documentation: "/docs" }));
app.get("/health", (c) => {
  logger.debug("Health check requested");
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.route("/api/auth", createAuthRoutes(container.authController));
app.route("/api/legalisir", createLegalisirRoutes(container.legalisirController));
app.route("/api/mahasiswa-aktif", createMahasiswaAktifRoutes(container.mahasiswaAktifController));

app.get("/openapi.json", (c) => c.json(swaggerDocument));
app.get("/docs", swaggerUI({ url: "/openapi.json" }));

app.notFound((c) => {
  logger.warn({ path: c.req.path }, "Route not found");
  return c.json({ success: false, message: "Route tidak ditemukan" }, 404);
});

app.onError((err, c) => {
  logger.error({ error: err.message, stack: err.stack, path: c.req.path }, "Unhandled error");
  return c.json({ success: false, message: "Internal server error" }, 500);
});

const PORT = Number(process.env.PORT || 3000);

if (process.env.NODE_ENV !== "production") {
  logger.info({ port: PORT }, "Starting development server");
}

export default app;
