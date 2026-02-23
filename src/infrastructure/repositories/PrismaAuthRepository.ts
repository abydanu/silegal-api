import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { Admin } from "../../domain/entities/Admin";
import { prisma } from "../database/prisma";

export class PrismaAuthRepository implements IAuthRepository {
  async findByUsername(username: string): Promise<Admin | null> {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) return null;
    return admin as unknown as Admin;
  }
}
