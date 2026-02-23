import { MahasiswaAktif, CreateMahasiswaAktifDTO } from "../entities/MahasiswaAktif.js";

export interface IMahasiswaAktifRepository {
  create(data: CreateMahasiswaAktifDTO): Promise<MahasiswaAktif>;
  findAll(page: number, limit: number, search: string): Promise<{ data: MahasiswaAktif[]; total: number }>;
  findById(id: string): Promise<MahasiswaAktif | null>;
  update(id: string, data: Partial<CreateMahasiswaAktifDTO>): Promise<MahasiswaAktif>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
  findRecent(limit: number): Promise<MahasiswaAktif[]>;
}
