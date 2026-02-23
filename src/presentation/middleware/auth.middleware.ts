import { Context, Next } from "hono";
import { verifyToken } from "../../infrastructure/jwt/JwtService.js";

export async function authMiddleware(c: Context, next: Next) {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json({ success: false, message: "Token tidak ditemukan" }, 401);
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);
    c.set("user", decoded);

    await next();
  } catch (err) {
    return c.json({ success: false, message: "Token tidak valid" }, 401);
  }
}
