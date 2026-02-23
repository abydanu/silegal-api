import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository.js";

export class DeleteLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(id: string) {
    const existing = await this.legalisirRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    await this.legalisirRepository.delete(id);
  }
}
