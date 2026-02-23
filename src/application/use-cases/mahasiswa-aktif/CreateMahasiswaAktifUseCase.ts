import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository";
import { CreateMahasiswaAktifDTO } from "../../../domain/entities/MahasiswaAktif";

export class CreateMahasiswaAktifUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(data: CreateMahasiswaAktifDTO) {
    return await this.mahasiswaAktifRepository.create(data);
  }
}
