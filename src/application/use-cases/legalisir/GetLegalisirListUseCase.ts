import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository.js";

export class GetLegalisirListUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(page: number, limit: number, search: string) {
    const { items, total } = await this.legalisirRepository.findAll(page, limit, search);
    return {
      data: items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
