import { Context } from "hono";
import { CreateMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/CreateMahasiswaAktifUseCase";
import { GetMahasiswaAktifListUseCase } from "../../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifListUseCase";
import { GetMahasiswaAktifByIdUseCase } from "../../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifByIdUseCase";
import { UpdateMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/UpdateMahasiswaAktifUseCase";
import { DeleteMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/DeleteMahasiswaAktifUseCase";
import logger from "../../infrastructure/logging/logger";

export class MahasiswaAktifController {
  constructor(
    private createMahasiswaAktifUseCase: CreateMahasiswaAktifUseCase,
    private getMahasiswaAktifListUseCase: GetMahasiswaAktifListUseCase,
    private getMahasiswaAktifByIdUseCase: GetMahasiswaAktifByIdUseCase,
    private updateMahasiswaAktifUseCase: UpdateMahasiswaAktifUseCase,
    private deleteMahasiswaAktifUseCase: DeleteMahasiswaAktifUseCase
  ) {}

  async create(c: Context) {
    try {
      const body = await c.req.json();
      logger.info({ nim: body.nim }, "Creating mahasiswa aktif request");
      const created = await this.createMahasiswaAktifUseCase.execute(body);
      logger.info({ id: created.id_data }, "Mahasiswa aktif request created");
      return c.json(
        {
          success: true,
          message: "Permohonan berhasil dikirim",
          data: {
            id_data: created.id_data,
            nomor_surat: created.nomor_surat,
            nama_mahasiswa: created.nama_mahasiswa,
            createdAt: created.createdAt,
          },
        },
        201
      );
    } catch (err: any) {
      logger.error({ error: err.message }, "Failed to create mahasiswa aktif request");
      return c.json({ success: false, message: err.message }, 500);
    }
  }

  async getList(c: Context) {
    try {
      const page = Number(c.req.query("page") || 1);
      const limit = Number(c.req.query("limit") || 20);
      const search = c.req.query("search") || "";
      logger.debug({ page, limit, search }, "Fetching mahasiswa aktif list");
      const result = await this.getMahasiswaAktifListUseCase.execute(page, limit, search);
      return c.json({ success: true, ...result });
    } catch (err: any) {
      logger.error({ error: err.message }, "Failed to fetch mahasiswa aktif list");
      return c.json({ success: false, message: err.message }, 500);
    }
  }

  async getById(c: Context) {
    try {
      const id = Number(c.req.param("id"));
      logger.debug({ id }, "Fetching mahasiswa aktif by ID");
      const item = await this.getMahasiswaAktifByIdUseCase.execute(id);
      return c.json({ success: true, data: item });
    } catch (err: any) {
      logger.warn({ id: c.req.param("id"), error: err.message }, "Mahasiswa aktif not found");
      return c.json({ success: false, message: err.message }, 404);
    }
  }

  async update(c: Context) {
    try {
      const id = Number(c.req.param("id"));
      const body = await c.req.json();
      logger.info({ id }, "Updating mahasiswa aktif");
      const updated = await this.updateMahasiswaAktifUseCase.execute(id, body);
      logger.info({ id }, "Mahasiswa aktif updated successfully");
      return c.json({ success: true, message: "Data berhasil diperbarui", data: updated });
    } catch (err: any) {
      const status = err.message === "Data tidak ditemukan" ? 404 : 500;
      logger.error({ id: c.req.param("id"), error: err.message }, "Failed to update mahasiswa aktif");
      return c.json({ success: false, message: err.message }, status);
    }
  }

  async delete(c: Context) {
    try {
      const id = Number(c.req.param("id"));
      logger.info({ id }, "Deleting mahasiswa aktif");
      await this.deleteMahasiswaAktifUseCase.execute(id);
      logger.info({ id }, "Mahasiswa aktif deleted successfully");
      return c.json({ success: true, message: "Data berhasil dihapus" });
    } catch (err: any) {
      const status = err.message === "Data tidak ditemukan" ? 404 : 500;
      logger.error({ id: c.req.param("id"), error: err.message }, "Failed to delete mahasiswa aktif");
      return c.json({ success: false, message: err.message }, status);
    }
  }
}