import { IAuthRepository } from "../../domain/repositories/IAuthRepository.js";
import { Admin } from "../../domain/entities/Admin.js";
import { prisma } from "../database/prisma.js";

export class PrismaAuthRepository implements IAuthRepository {
  async findByUsername(username: string): Promise<Admin | null> {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) return null;
    return admin as unknown as Admin;
  }
}
