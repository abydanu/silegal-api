import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository";

export class DeleteLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(id: number) {
    const existing = await this.legalisirRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    await this.legalisirRepository.delete(id);
  }
}
