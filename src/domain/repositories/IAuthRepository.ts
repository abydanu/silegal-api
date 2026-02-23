import { Admin } from "../entities/Admin";

export interface IAuthRepository {
  findByUsername(username: string): Promise<Admin | null>;
}
