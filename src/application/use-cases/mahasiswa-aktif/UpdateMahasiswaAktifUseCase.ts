import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository.js";
import { CreateMahasiswaAktifDTO } from "../../../domain/entities/MahasiswaAktif.js";

export class UpdateMahasiswaAktifUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(id: string, data: Partial<CreateMahasiswaAktifDTO>) {
    const existing = await this.mahasiswaAktifRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    return await this.mahasiswaAktifRepository.update(id, data);
  }
}