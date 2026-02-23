import app from "./src/index";

const PORT = Number(process.env.PORT || 3000);

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`📚 Swagger UI available at http://localhost:${PORT}/docs`);

export default {
  port: PORT,
  fetch: app.fetch,
};