import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository";

export class GetLegalisirByIdUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(id: string) {
    const item = await this.legalisirRepository.findById(id);
    if (!item) {
      throw new Error("Data tidak ditemukan");
    }
    return item;
  }
}
