import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository.js";
import { CreateLegalisirDTO } from "../../../domain/entities/Legalisir.js";

export class UpdateLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(id: string, data: Partial<CreateLegalisirDTO>) {
    const existing = await this.legalisirRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    return await this.legalisirRepository.update(id, data);
  }
}
