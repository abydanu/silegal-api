import { PrismaAuthRepository } from "../infrastructure/repositories/PrismaAuthRepository";
import { PrismaLegalisirRepository } from "../infrastructure/repositories/PrismaLegalisirRepository";
import { PrismaMahasiswaAktifRepository } from "../infrastructure/repositories/PrismaMahasiswaAktifRepository";
import { LoginUseCase } from "../application/use-cases/auth/LoginUseCase";
import { CreateLegalisirUseCase } from "../application/use-cases/legalisir/CreateLegalisirUseCase";
import { GetLegalisirListUseCase } from "../application/use-cases/legalisir/GetLegalisirListUseCase";
import { GetLegalisirByIdUseCase } from "../application/use-cases/legalisir/GetLegalisirByIdUseCase";
import { UpdateLegalisirUseCase } from "../application/use-cases/legalisir/UpdateLegalisirUseCase";
import { DeleteLegalisirUseCase } from "../application/use-cases/legalisir/DeleteLegalisirUseCase";
import { CreateMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/CreateMahasiswaAktifUseCase";
import { GetMahasiswaAktifListUseCase } from "../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifListUseCase";
import { GetMahasiswaAktifByIdUseCase } from "../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifByIdUseCase";
import { UpdateMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/UpdateMahasiswaAktifUseCase";
import { DeleteMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/DeleteMahasiswaAktifUseCase";
import { AuthController } from "../presentation/controllers/AuthController";
import { LegalisirController } from "../presentation/controllers/LegalisirController";
import { MahasiswaAktifController } from "../presentation/controllers/MahasiswaAktifController";

class Container {
  private authRepository = new PrismaAuthRepository();
  private legalisirRepository = new PrismaLegalisirRepository();
  private mahasiswaAktifRepository = new PrismaMahasiswaAktifRepository();

  private loginUseCase = new LoginUseCase(this.authRepository);

  private createLegalisirUseCase = new CreateLegalisirUseCase(this.legalisirRepository);
  private getLegalisirListUseCase = new GetLegalisirListUseCase(this.legalisirRepository);
  private getLegalisirByIdUseCase = new GetLegalisirByIdUseCase(this.legalisirRepository);
  private updateLegalisirUseCase = new UpdateLegalisirUseCase(this.legalisirRepository);
  private deleteLegalisirUseCase = new DeleteLegalisirUseCase(this.legalisirRepository);

  private createMahasiswaAktifUseCase = new CreateMahasiswaAktifUseCase(this.mahasiswaAktifRepository);
  private getMahasiswaAktifListUseCase = new GetMahasiswaAktifListUseCase(this.mahasiswaAktifRepository);
  private getMahasiswaAktifByIdUseCase = new GetMahasiswaAktifByIdUseCase(this.mahasiswaAktifRepository);
  private updateMahasiswaAktifUseCase = new UpdateMahasiswaAktifUseCase(this.mahasiswaAktifRepository);
  private deleteMahasiswaAktifUseCase = new DeleteMahasiswaAktifUseCase(this.mahasiswaAktifRepository);

  public authController = new AuthController(this.loginUseCase);

  public legalisirController = new LegalisirController(
    this.createLegalisirUseCase,
    this.getLegalisirListUseCase,
    this.getLegalisirByIdUseCase,
    this.updateLegalisirUseCase,
    this.deleteLegalisirUseCase
  );

  public mahasiswaAktifController = new MahasiswaAktifController(
    this.createMahasiswaAktifUseCase,
    this.getMahasiswaAktifListUseCase,
    this.getMahasiswaAktifByIdUseCase,
    this.updateMahasiswaAktifUseCase,
    this.deleteMahasiswaAktifUseCase
  );
}

export const container = new Container();
