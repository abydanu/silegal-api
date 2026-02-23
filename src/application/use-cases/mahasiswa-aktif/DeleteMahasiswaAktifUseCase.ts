import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository";

export class DeleteMahasiswaAktifUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(id: number) {
    const existing = await this.mahasiswaAktifRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    await this.mahasiswaAktifRepository.delete(id);
  }
}
