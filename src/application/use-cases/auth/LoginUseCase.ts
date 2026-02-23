import bcrypt from "bcryptjs";
import { IAuthRepository } from "../../../domain/repositories/IAuthRepository.js";
import { signToken } from "../../../infrastructure/jwt/JwtService.js";

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(username: string, password: string) {
    const admin = await this.authRepository.findByUsername(username);

    if (!admin || admin.status === "non_aktif") {
      throw new Error("Username atau password salah");
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      throw new Error("Username atau password salah");
    }

    const token = signToken({
      id_admin: admin.id,
      username: admin.username,
      role: admin.role,
    });

    return {
      token,
      admin: {
        id: admin.id,
        nama: admin.nama,
        username: admin.username,
        role: admin.role,
      },
    };
  }
}
