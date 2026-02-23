import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository.js";
import { CreateMahasiswaAktifDTO } from "../../../domain/entities/MahasiswaAktif.js";

export class CreateMahasiswaAktifUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(data: CreateMahasiswaAktifDTO) {
    return await this.mahasiswaAktifRepository.create(data);
  }
}
