import { ILegalisirRepository } from "../../../domain/repositories/ILegalisirRepository";
import { CreateLegalisirDTO } from "../../../domain/entities/Legalisir";

export class CreateLegalisirUseCase {
  constructor(private legalisirRepository: ILegalisirRepository) {}

  async execute(data: CreateLegalisirDTO) {
    return await this.legalisirRepository.create(data);
  }
}
