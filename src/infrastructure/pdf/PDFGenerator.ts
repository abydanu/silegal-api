import PDFDocument from "pdfkit";
import { MahasiswaAktif } from "../../domain/entities/MahasiswaAktif";

export class PDFGenerator {
  private formatDate(date: Date): string {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  private formatProgramStudi(prodi: string): string {
    return prodi.replace(/_/g, " ");
  }

  private formatFakultas(fakultas: string): string {
    return fakultas.replace(/_/g, " ");
  }

  private formatSemester(semester: string): string {

    return semester.replace("SEMESTER_", "");
  }


  generateStatusAktif(data: MahasiswaAktif): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ size: "A4", margin: 50 });
        const chunks: Buffer[] = [];

        doc.on("data", (chunk) => chunks.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);



        const pageWidth = 595.28;
        const centerX = pageWidth / 2;





        doc.fontSize(16).font("Helvetica-Bold").text("UNIVERSITAS MERDEKA MADIUN", centerX - 200, 60, {
          width: 400,
          align: "center"
        });

        doc.moveDown(0.5);
        doc.fontSize(9).font("Helvetica").text(
          "Kampus: Jalan Serayu No.79 Madiun 63133 TromolPos 12 Telp. (0351) 464427, 497058 Fax (0351) 497058",
          centerX - 250,
          doc.y,
          { width: 500, align: "center" }
        );

        doc.text(
          "Email: universitas@unmer-madiun.ac.id Web Site: www.unmer-madiun.ac.id",
          centerX - 250,
          doc.y,
          { width: 500, align: "center" }
        );

        doc.moveDown(0.5);


        doc.moveTo(50, doc.y).lineTo(545, doc.y).lineWidth(2).stroke();
        doc.moveDown(1.5);


        doc.fontSize(14).font("Helvetica-Bold").text("SURAT KETERANGAN MAHASISWA AKTIF", { align: "center", underline: true });
        doc.moveDown(0.3);
        doc.fontSize(11).font("Helvetica").text(`Nomor: ${data.nomor_surat}`, { align: "center" });
        doc.moveDown(1.5);


        doc.fontSize(11).font("Helvetica").text("Yang bertanda tangan di bawah ini, Dekan Fakultas " + this.formatFakultas(data.fakultas) + " Universitas Merdeka Madiun, menerangkan bahwa:");
        doc.moveDown();


        const leftMargin = 100;
        const colonPosition = 250;
        let currentY = doc.y;

        doc.text("Nama", leftMargin, currentY);
        doc.text(": " + data.nama_mahasiswa, colonPosition, currentY);
        currentY += 20;

        doc.text("NIM", leftMargin, currentY);
        doc.text(": " + data.nim, colonPosition, currentY);
        currentY += 20;

        doc.text("Tempat/Tgl Lahir", leftMargin, currentY);
        doc.text(": " + data.tempat_lahir + ", " + this.formatDate(data.tgl_lahir), colonPosition, currentY);
        currentY += 20;

        doc.text("Program Studi", leftMargin, currentY);
        doc.text(": " + this.formatProgramStudi(data.program_studi), colonPosition, currentY);
        currentY += 20;

        doc.text("Fakultas", leftMargin, currentY);
        doc.text(": " + this.formatFakultas(data.fakultas), colonPosition, currentY);
        currentY += 20;

        doc.text("Semester", leftMargin, currentY);
        doc.text(": " + this.formatSemester(data.semester), colonPosition, currentY);
        currentY += 20;

        doc.text("Tahun Akademik", leftMargin, currentY);
        doc.text(": " + data.thn_akademik, colonPosition, currentY);
        currentY += 20;

        doc.text("Alamat", leftMargin, currentY);
        doc.text(": " + data.alamat_rumah, colonPosition, currentY);

        doc.y = currentY + 20;

        doc.moveDown(2);


        doc.text("Adalah benar mahasiswa aktif pada Fakultas " + this.formatFakultas(data.fakultas) + " Universitas Merdeka Madiun.");
        doc.moveDown();
        doc.text("Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.");
        doc.moveDown(3);


        const today = new Date();
        doc.text("Madiun, " + this.formatDate(today), 350);
        doc.moveDown(0.5);
        doc.text("Dekan,", 350);
        doc.moveDown(3);
        doc.text("_______________________", 350);
        doc.text("NIP. __________________", 350);

        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }

  generateBeasiswa(data: MahasiswaAktif): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ size: "A4", margin: 50 });
        const chunks: Buffer[] = [];

        doc.on("data", (chunk) => chunks.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);

        const pageWidth = 595.28;
        const centerX = pageWidth / 2;

        doc.fontSize(16).font("Helvetica-Bold").text("UNIVERSITAS MERDEKA MADIUN", centerX - 200, 60, {
          width: 400,
          align: "center"
        });

        doc.moveDown(0.5);
        doc.fontSize(9).font("Helvetica").text(
          "Kampus: Jalan Serayu No.79 Madiun 63133 TromolPos 12 Telp. (0351) 464427, 497058 Fax (0351) 497058",
          centerX - 250,
          doc.y,
          { width: 500, align: "center" }
        );

        doc.text(
          "Email: universitas@unmer-madiun.ac.id Web Site: www.unmer-madiun.ac.id",
          centerX - 250,
          doc.y,
          { width: 500, align: "center" }
        );

        doc.moveDown(0.5);
        doc.moveTo(50, doc.y).lineTo(545, doc.y).lineWidth(2).stroke();
        doc.moveDown(1.5);

        doc.fontSize(14).font("Helvetica-Bold").text("SURAT KETERANGAN", { align: "center", underline: true });
        doc.moveDown(0.3);
        doc.fontSize(11).font("Helvetica").text(`Nomor: ${data.nomor_surat}`, { align: "center" });
        doc.moveDown(1.5);

        doc.fontSize(12).font("Helvetica-Bold").text("UNTUK KEPERLUAN BEASISWA", { align: "center" });
        doc.moveDown(0.5);

        doc.fontSize(11).font("Helvetica").text("Yang bertanda tangan di bawah ini, Dekan Fakultas " + this.formatFakultas(data.fakultas) + " Universitas Merdeka Madiun, menerangkan bahwa:");
        doc.moveDown();

        const leftMargin = 100;
        const colonPosition = 250;
        let currentY = doc.y;

        doc.text("Nama", leftMargin, currentY);
        doc.text(": " + data.nama_mahasiswa, colonPosition, currentY);
        currentY += 20;

        doc.text("NIM", leftMargin, currentY);
        doc.text(": " + data.nim, colonPosition, currentY);
        currentY += 20;

        doc.text("Tempat/Tgl Lahir", leftMargin, currentY);
        doc.text(": " + data.tempat_lahir + ", " + this.formatDate(data.tgl_lahir), colonPosition, currentY);
        currentY += 20;

        doc.text("Program Studi", leftMargin, currentY);
        doc.text(": " + this.formatProgramStudi(data.program_studi), colonPosition, currentY);
        currentY += 20;

        doc.text("Fakultas", leftMargin, currentY);
        doc.text(": " + this.formatFakultas(data.fakultas), colonPosition, currentY);
        currentY += 20;

        doc.text("Semester", leftMargin, currentY);
        doc.text(": " + this.formatSemester(data.semester), colonPosition, currentY);
        currentY += 20;

        doc.text("Tahun Akademik", leftMargin, currentY);
        doc.text(": " + data.thn_akademik, colonPosition, currentY);

        doc.y = currentY + 20;

        doc.moveDown(2);

        doc.text("Adalah benar mahasiswa aktif yang terdaftar pada Fakultas " + this.formatFakultas(data.fakultas) + " Universitas Merdeka Madiun dan layak untuk menerima bantuan beasiswa.");
        doc.moveDown();
        doc.text("Surat keterangan ini dibuat untuk keperluan pengajuan beasiswa.");
        doc.moveDown();
        doc.text("Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.");
        doc.moveDown(3);

        const today = new Date();
        doc.text("Madiun, " + this.formatDate(today), 350);
        doc.moveDown(0.5);
        doc.text("Dekan,", 350);
        doc.moveDown(3);
        doc.text("_______________________", 350);
        doc.text("NIP. __________________", 350);

        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }
}
