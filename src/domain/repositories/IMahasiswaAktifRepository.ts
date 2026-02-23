import { MahasiswaAktif, CreateMahasiswaAktifDTO } from "../entities/MahasiswaAktif";

export interface IMahasiswaAktifRepository {
  create(data: CreateMahasiswaAktifDTO): Promise<MahasiswaAktif>;
  findAll(page: number, limit: number, search: string): Promise<{ data: MahasiswaAktif[]; total: number }>;
  findById(id: number): Promise<MahasiswaAktif | null>;
  update(id: number, data: Partial<CreateMahasiswaAktifDTO>): Promise<MahasiswaAktif>;
  delete(id: number): Promise<void>;
  count(): Promise<number>;
  findRecent(limit: number): Promise<MahasiswaAktif[]>;
}
