import { z } from "@hono/zod-openapi";
import { toEnumValue } from "../../utils/enumMapper.js";

export const LegalisirSchema = z.object({
  tanggal_pengajuan: z.string().min(1, "Tanggal pengajuan wajib diisi").openapi({ example: "2024-01-15" }),
  nomor_surat: z.string().min(1, "Nomor surat wajib diisi").openapi({ example: "001/LEG/2024" }),
  nama_mahasiswa: z.string().min(1, "Nama mahasiswa wajib diisi").openapi({ example: "John Doe" }),
  tempat_lahir: z.string().min(1, "Tempat lahir wajib diisi").openapi({ example: "Jakarta" }),
  nim: z.string().min(1, "NIM wajib diisi").openapi({ example: "2021001" }),
  tgl_lahir: z.string().min(1, "Tanggal lahir wajib diisi").openapi({ example: "2000-05-20" }),
  tgl_kelulusan: z.string().min(1, "Tanggal kelulusan wajib diisi").openapi({ example: "2024-08-15" }),
  program_studi: z.string().min(1, "Program studi wajib dipilih").transform((val) => {
    const enumValue = toEnumValue(val, 'prodi');
    const validValues = [
      "ILMU_HUKUM",
      "MANAJEMEN",
      "AKUNTANSI",
      "ADMINISTRASI_NEGARA",
      "ILMU_KOMUNIKASI",
      "AGROTEKNOLOGI",
      "TEKNIK_MESIN",
      "TEKNIK_SIPIL",
      "MANAJEMEN_INFORMATIKA"
    ];
    if (!validValues.includes(enumValue)) {
      throw new Error(`Program studi tidak valid: ${val}`);
    }
    return enumValue;
  }),
  fakultas: z.string().min(1, "Fakultas wajib dipilih").transform((val) => {
    const enumValue = toEnumValue(val, 'fakultas');
    const validValues = ["HUKUM", "EKONOMI", "ILMU_SOSIAL_DAN_ILMU_POLITIK", "PERTANIAN", "TEKNIK"];
    if (!validValues.includes(enumValue)) {
      throw new Error(`Fakultas tidak valid: ${val}`);
    }
    return enumValue;
  }),
  nomor_seri_ijazah: z.string().min(1, "Nomor seri ijazah wajib diisi").openapi({ example: "SI-2024-001" }),
  sebanyak_ijazah: z.number().int().min(0, "Jumlah ijazah tidak boleh negatif").default(0),
  sebanyak_transkip: z.number().int().min(0, "Jumlah transkrip tidak boleh negatif").default(0),
  sebanyak_akreditasi: z.number().int().min(0, "Jumlah akreditasi tidak boleh negatif").default(0),
  jumlah_legalisir: z.number().int().min(1, "Jumlah legalisir minimal 1"),
});

export const LegalisirResponseSchema = z.object({
  id: z.string(),
  tanggal_pengajuan: z.string(),
  nomor_surat: z.string(),
  nama_mahasiswa: z.string(),
  tempat_lahir: z.string(),
  nim: z.string(),
  tgl_lahir: z.string(),
  tgl_kelulusan: z.string(),
  program_studi: z.string(),
  fakultas: z.string(),
  nomor_seri_ijazah: z.string(),
  sebanyak_ijazah: z.number(),
  sebanyak_transkip: z.number(),
  sebanyak_akreditasi: z.number(),
  jumlah_legalisir: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const LegalisirListResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(LegalisirResponseSchema),
  meta: z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
  }),
});
