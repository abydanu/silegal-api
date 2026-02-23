import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository.js";
import { CreateLegalisirDTO } from "../../../domain/entities/Legalisir.js";

export class CreateLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(data: CreateLegalisirDTO) {
    return await this.legalisirRepository.create(data);
  }
}
