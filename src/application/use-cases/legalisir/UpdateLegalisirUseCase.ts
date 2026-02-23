import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository";
import { CreateLegalisirDTO } from "../../../domain/entities/Legalisir";

export class UpdateLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(id: number, data: Partial<CreateLegalisirDTO>) {
    const existing = await this.legalisirRepository.findById(id);
    if (!existing) {
      throw new Error("Data tidak ditemukan");
    }
    return await this.legalisirRepository.update(id, data);
  }
}
