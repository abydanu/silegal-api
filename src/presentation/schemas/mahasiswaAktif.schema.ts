import { z } from "@hono/zod-openapi";
import { toEnumValue } from "../../utils/enumMapper.js";

export const MahasiswaAktifSchema = z.object({
  tanggal_pengajuan: z.string().min(1, "Tanggal pengajuan wajib diisi").openapi({ example: "2024-01-15" }),
  nomor_surat: z.string().min(1, "Nomor surat wajib diisi").openapi({ example: "001/MA/2024" }),
  nama_mahasiswa: z.string().min(1, "Nama mahasiswa wajib diisi").openapi({ example: "Jane Doe" }),
  tempat_lahir: z.string().min(1, "Tempat lahir wajib diisi").openapi({ example: "Bandung" }),
  nim: z.string().min(1, "NIM wajib diisi").openapi({ example: "2021002" }),
  tgl_lahir: z.string().min(1, "Tanggal lahir wajib diisi").openapi({ example: "2001-03-10" }),
  alamat_rumah: z.string().min(1, "Alamat rumah wajib diisi").openapi({ example: "Jl. Merdeka No. 10" }),
  semester: z.string().min(1, "Semester wajib dipilih").transform((val) => {
    const enumValue = toEnumValue(val, 'semester');
    const validValues = ["SEMESTER_1", "SEMESTER_2", "SEMESTER_3", "SEMESTER_4", "SEMESTER_5", "SEMESTER_6", "SEMESTER_7", "SEMESTER_8"];
    if (!validValues.includes(enumValue)) {
      throw new Error(`Semester tidak valid: ${val}`);
    }
    return enumValue;
  }).openapi({ example: "SEMESTER_5" }),
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
  thn_akademik: z.string().min(1, "Tahun akademik wajib diisi").openapi({ example: "2023/2024" }),
  keterangan_keperluan: z.string().min(1, "Keperluan wajib diisi").max(300, "Keperluan maksimal 300 karakter").openapi({ example: "Untuk keperluan beasiswa" }),
});

export const MahasiswaAktifResponseSchema = z.object({
  id: z.string(),
  tanggal_pengajuan: z.string(),
  nomor_surat: z.string(),
  nama_mahasiswa: z.string(),
  tempat_lahir: z.string(),
  nim: z.string(),
  tgl_lahir: z.string(),
  alamat_rumah: z.string(),
  semester: z.string(),
  program_studi: z.string(),
  fakultas: z.string(),
  thn_akademik: z.string(),
  keterangan_keperluan: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const MahasiswaAktifListResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(MahasiswaAktifResponseSchema),
  meta: z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
  }),
});
