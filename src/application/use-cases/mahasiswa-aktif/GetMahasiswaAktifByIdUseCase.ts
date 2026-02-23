import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository";

export class GetMahasiswaAktifByIdUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(id: string) {
    const item = await this.mahasiswaAktifRepository.findById(id);
    if (!item) {
      throw new Error("Data tidak ditemukan");
    }
    return item;
  }
}
