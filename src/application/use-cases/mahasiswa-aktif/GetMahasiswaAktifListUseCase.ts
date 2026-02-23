import { IMahasiswaAktifRepository } from "../../../domain/repositories/IMahasiswaAktifRepository.js";

export class GetMahasiswaAktifListUseCase {
  constructor(private mahasiswaAktifRepository: IMahasiswaAktifRepository) {}

  async execute(page: number, limit: number, search: string) {
    const { data, total } = await this.mahasiswaAktifRepository.findAll(page, limit, search);
    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
