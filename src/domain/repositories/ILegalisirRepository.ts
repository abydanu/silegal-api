import { Legalisir, CreateLegalisirDTO } from "../entities/Legalisir";

export interface ILegalisirRepository {
  create(data: CreateLegalisirDTO): Promise<Legalisir>;
  findAll(page: number, limit: number, search: string): Promise<{ data: Legalisir[]; total: number }>;
  findById(id: number): Promise<Legalisir | null>;
  update(id: number, data: Partial<CreateLegalisirDTO>): Promise<Legalisir>;
  delete(id: number): Promise<void>;
  count(): Promise<number>;
  findRecent(limit: number): Promise<Legalisir[]>;
}
