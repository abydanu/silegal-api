import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository";

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
