import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository.js";
import { PDFGenerator } from "../../../infrastructure/pdf/PDFGenerator.js";

export type PrintType = "status-aktif" | "beasiswa";

export class PrintMahasiswaAktifUseCase {
  constructor(
    private mahasiswaAktifRepository: IMahasiswaAktifRepository,
    private pdfGenerator: PDFGenerator
  ) {}

  async execute(id: string, type: PrintType): Promise<Buffer> {
    const data = await this.mahasiswaAktifRepository.findById(id);
    
    if (!data) {
      throw new Error("Data tidak ditemukan");
    }

    switch (type) {
      case "status-aktif":
        return await this.pdfGenerator.generateStatusAktif(data);
      case "beasiswa":
        return await this.pdfGenerator.generateBeasiswa(data);
      default:
        throw new Error("Tipe print tidak valid");
    }
  }
}
