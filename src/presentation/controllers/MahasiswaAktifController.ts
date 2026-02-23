import { Context } from "hono";
import { CreateMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/CreateMahasiswaAktifUseCase.js";
import { GetMahasiswaAktifListUseCase } from "../../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifListUseCase.js";
import { GetMahasiswaAktifByIdUseCase } from "../../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifByIdUseCase.js";
import { UpdateMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/UpdateMahasiswaAktifUseCase.js";
import { DeleteMahasiswaAktifUseCase } from "../../application/use-cases/mahasiswa-aktif/DeleteMahasiswaAktifUseCase.js";
import { PrintMahasiswaAktifUseCase, PrintType } from "../../application/use-cases/mahasiswa-aktif/PrintMahasiswaAktifUseCase.js";
import logger from "../../infrastructure/logging/logger.js";

export class MahasiswaAktifController {
  constructor(
    private createMahasiswaAktifUseCase: CreateMahasiswaAktifUseCase,
    private getMahasiswaAktifListUseCase: GetMahasiswaAktifListUseCase,
    private getMahasiswaAktifByIdUseCase: GetMahasiswaAktifByIdUseCase,
    private updateMahasiswaAktifUseCase: UpdateMahasiswaAktifUseCase,
    private deleteMahasiswaAktifUseCase: DeleteMahasiswaAktifUseCase,
    private printMahasiswaAktifUseCase: PrintMahasiswaAktifUseCase
  ) {}

  async create(c: Context) {
    try {
      const body = await c.req.json();
      logger.info({ nim: body.nim }, "Creating mahasiswa aktif request");
      const created = await this.createMahasiswaAktifUseCase.execute(body);
      logger.info({ id: created.id }, "Mahasiswa aktif request created");
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
      const id = c.req.param("id");
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
      const id = c.req.param("id");
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
      const id = c.req.param("id");
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

  async print(c: Context) {
    try {
      const id = c.req.param("id");
      const type = c.req.query("type") as PrintType || "status-aktif";
      
      logger.info({ id, type }, "Generating PDF for mahasiswa aktif");
      
      const mahasiswaData = await this.getMahasiswaAktifByIdUseCase.execute(id);
      
      const pdfBuffer = await this.printMahasiswaAktifUseCase.execute(id, type);
      
      logger.info({ id, type }, "PDF generated successfully");
      
      const uint8Array = new Uint8Array(pdfBuffer);
      
      const sanitizedNama = mahasiswaData.nama_mahasiswa
        .replace(/[^a-zA-Z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      
      return c.newResponse(uint8Array, 200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="surat-keterangan-${type}-${sanitizedNama}.pdf"`,
      });
    } catch (err: any) {
      const status = err.message === "Data tidak ditemukan" ? 404 : 500;
      logger.error({ id: c.req.param("id"), error: err.message }, "Failed to generate PDF");
      return c.json({ success: false, message: err.message }, status);
    }
  }
}