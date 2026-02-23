import { Context } from "hono";
import { CreateLegalisirUseCase } from "../../application/use-cases/legalisir/CreateLegalisirUseCase.js";
import { GetLegalisirListUseCase } from "../../application/use-cases/legalisir/GetLegalisirListUseCase.js";
import { GetLegalisirByIdUseCase } from "../../application/use-cases/legalisir/GetLegalisirByIdUseCase.js";
import { UpdateLegalisirUseCase } from "../../application/use-cases/legalisir/UpdateLegalisirUseCase.js";
import { DeleteLegalisirUseCase } from "../../application/use-cases/legalisir/DeleteLegalisirUseCase.js";
import logger from "../../infrastructure/logging/logger.js";

export class LegalisirController {
  constructor(
    private createLegalisirUseCase: CreateLegalisirUseCase,
    private getLegalisirListUseCase: GetLegalisirListUseCase,
    private getLegalisirByIdUseCase: GetLegalisirByIdUseCase,
    private updateLegalisirUseCase: UpdateLegalisirUseCase,
    private deleteLegalisirUseCase: DeleteLegalisirUseCase
  ) {}

  async create(c: Context) {
    try {
      const body = await c.req.json();
      logger.info({ nim: body.nim }, "Creating legalisir request");
      const created = await this.createLegalisirUseCase.execute(body);
      logger.info({ id: created.id }, "Legalisir request created");
      return c.json(
        {
          success: true,
          message: "Permohonan berhasil dikirim",
          data: {
            id: created.id,
            nomor_surat: created.nomor_surat,
            nama_mahasiswa: created.nama_mahasiswa,
            createdAt: created.createdAt,
          },
        },
        201
      );
    } catch (err: any) {
      logger.error({ error: err.message }, "Failed to create legalisir request");
      return c.json({ success: false, message: err.message }, 500);
    }
  }

  async getList(c: Context) {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 20);
      const search = c.req.query("search") || "";
      logger.debug({ page, limit, search }, "Fetching legalisir list");
      const result = await this.getLegalisirListUseCase.execute(page, limit, search);
      return c.json({ success: true, ...result });
    } catch (err: any) {
      logger.error({ error: err.message }, "Failed to fetch legalisir list");
      return c.json({ success: false, message: err.message }, 500);
    }
  }

  async getById(c: Context) {
    try {
      const id = c.req.param("id");
      logger.debug({ id }, "Fetching legalisir by ID");
      const item = await this.getLegalisirByIdUseCase.execute(id);
      return c.json({ success: true, data: item });
    } catch (err: any) {
      logger.warn({ id: c.req.param("id"), error: err.message }, "Legalisir not found");
      return c.json({ success: false, message: err.message }, 404);
    }
  }

  async update(c: Context) {
    try {
      const id = c.req.param("id");
      const body = await c.req.json();
      logger.info({ id }, "Updating legalisir");
      const updated = await this.updateLegalisirUseCase.execute(id, body);
      logger.info({ id }, "Legalisir updated successfully");
      return c.json({ success: true, message: "Data berhasil diperbarui", data: updated });
    } catch (err: any) {
      const status = err.message === "Data tidak ditemukan" ? 404 : 500;
      logger.error({ id: c.req.param("id"), error: err.message }, "Failed to update legalisir");
      return c.json({ success: false, message: err.message }, status);
    }
  }

  async delete(c: Context) {
    try {
      const id = c.req.param("id");
      logger.info({ id }, "Deleting legalisir");
      await this.deleteLegalisirUseCase.execute(id);
      logger.info({ id }, "Legalisir deleted successfully");
      return c.json({ success: true, message: "Data berhasil dihapus" });
    } catch (err: any) {
      const status = err.message === "Data tidak ditemukan" ? 404 : 500;
      logger.error({ id: c.req.param("id"), error: err.message }, "Failed to delete legalisir");
      return c.json({ success: false, message: err.message }, status);
    }
  }
}
