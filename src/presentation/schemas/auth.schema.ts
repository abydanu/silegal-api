import { z } from "@hono/zod-openapi";

export const LoginSchema = z.object({
  username: z.string().min(1).openapi({ example: "admin" }),
  password: z.string().min(1).openapi({ example: "password123" }),
});

export const LoginResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    token: z.string(),
    admin: z.object({
      id_admin: z.number(),
      nama_admin: z.string(),
      username: z.string(),
      role: z.string(),
    }),
  }),
});

export const ErrorResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  errors: z.record(z.array(z.string())).optional(),
});
