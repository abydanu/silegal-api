import bcrypt from "bcryptjs";
import { IAuthRepository } from "../../../domain/repositories/IAuthRepository";
import { signToken } from "../../../infrastructure/jwt/JwtService";

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(username: string, password: string) {
    const admin = await this.authRepository.findByUsername(username);

    if (!admin || admin.status_akun === "non_aktif") {
      throw new Error("Username atau password salah");
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      throw new Error("Username atau password salah");
    }

    const token = signToken({
      id_admin: admin.id_admin,
      username: admin.username,
      role: admin.role,
    });

    return {
      token,
      admin: {
        id_admin: admin.id_admin,
        nama_admin: admin.nama_admin,
        username: admin.username,
        role: admin.role,
      },
    };
  }
}
