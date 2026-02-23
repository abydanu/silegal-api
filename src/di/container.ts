import { PrismaAuthRepository } from "../infrastructure/repositories/PrismaAuthRepository.js";
import { PrismaLegalisirRepository } from "../infrastructure/repositories/PrismaLegalisirRepository.js";
import { PrismaMahasiswaAktifRepository } from "../infrastructure/repositories/PrismaMahasiswaAktifRepository.js";
import { LoginUseCase } from "../application/use-cases/auth/LoginUseCase.js";
import { CreateLegalisirUseCase } from "../application/use-cases/legalisir/CreateLegalisirUseCase.js";
import { GetLegalisirListUseCase } from "../application/use-cases/legalisir/GetLegalisirListUseCase.js";
import { GetLegalisirByIdUseCase } from "../application/use-cases/legalisir/GetLegalisirByIdUseCase.js";
import { UpdateLegalisirUseCase } from "../application/use-cases/legalisir/UpdateLegalisirUseCase.js";
import { DeleteLegalisirUseCase } from "../application/use-cases/legalisir/DeleteLegalisirUseCase.js";
import { CreateMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/CreateMahasiswaAktifUseCase.js";
import { GetMahasiswaAktifListUseCase } from "../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifListUseCase.js";
import { GetMahasiswaAktifByIdUseCase } from "../application/use-cases/mahasiswa-aktif/GetMahasiswaAktifByIdUseCase.js";
import { UpdateMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/UpdateMahasiswaAktifUseCase.js";
import { DeleteMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/DeleteMahasiswaAktifUseCase.js";
import { PrintMahasiswaAktifUseCase } from "../application/use-cases/mahasiswa-aktif/PrintMahasiswaAktifUseCase.js";
import { AuthController } from "../presentation/controllers/AuthController.js";
import { LegalisirController } from "../presentation/controllers/LegalisirController.js";
import { MahasiswaAktifController } from "../presentation/controllers/MahasiswaAktifController.js";
import { PDFGenerator } from "../infrastructure/pdf/PDFGenerator.js";

class Container {
  private authRepository = new PrismaAuthRepository();
  private legalisirRepository = new PrismaLegalisirRepository();
  private mahasiswaAktifRepository = new PrismaMahasiswaAktifRepository();
  private pdfGenerator = new PDFGenerator();

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
  private printMahasiswaAktifUseCase = new PrintMahasiswaAktifUseCase(this.mahasiswaAktifRepository, this.pdfGenerator);

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
    this.deleteMahasiswaAktifUseCase,
    this.printMahasiswaAktifUseCase
  );
}

export const container = new Container();
