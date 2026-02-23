import { Admin } from "../entities/Admin.js";

export interface IAuthRepository {
  findByUsername(username: string): Promise<Admin | null>;
}