import { Context } from "hono";
import { LoginUseCase } from "../../application/use-cases/auth/LoginUseCase.js";
import logger from "../../infrastructure/logging/logger.js";

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(c: Context) {
    try {
      const body = await c.req.json();
      logger.info({ username: body.username }, "Login attempt");
      const result = await this.loginUseCase.execute(body.username, body.password);
      logger.info({ username: body.username }, "Login successful");
      return c.json({ success: true, message: "Login berhasil", data: result });
    } catch (err: any) {
      logger.warn({ username: c.req.json().then(b => b.username), error: err.message }, "Login failed");
      return c.json({ success: false, message: err.message }, 401);
    }
  }

  async logout(c: Context) {
    logger.info("Logout request");
    return c.json({ success: true, message: "Logout berhasil" });
  }
}