import { Legalisir, CreateLegalisirDTO } from "../entities/Legalisir.js";

export interface ILegalisirRepository {
  create(data: CreateLegalisirDTO): Promise<Legalisir>;
  findAll(page: number, limit: number, search: string): Promise<{ items: Legalisir[]; total: number }>;
  findById(id: string): Promise<Legalisir | null>;
  update(id: string, data: Partial<CreateLegalisirDTO>): Promise<Legalisir>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
  findRecent(limit: number): Promise<Legalisir[]>;
}
