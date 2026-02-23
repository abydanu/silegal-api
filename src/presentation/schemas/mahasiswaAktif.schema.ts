import { z } from "@hono/zod-openapi";

export const MahasiswaAktifSchema = z.object({
  tanggal_pengajuan: z.string().openapi({ example: "2024-01-15" }),
  nomor_surat: z.string().min(1).openapi({ example: "001/MA/2024" }),
  nama_mahasiswa: z.string().min(1).openapi({ example: "Jane Doe" }),
  tempat_lahir: z.string().min(1).openapi({ example: "Bandung" }),
  nim: z.string().min(1).openapi({ example: "2021002" }),
  tgl_lahir: z.string().openapi({ example: "2001-03-10" }),
  alamat_rumah: z.string().min(1).openapi({ example: "Jl. Merdeka No. 10" }),
  semester: z.enum(["SEMESTER_1", "SEMESTER_2", "SEMESTER_3", "SEMESTER_4", "SEMESTER_5", "SEMESTER_6", "SEMESTER_7", "SEMESTER_8"]).openapi({ example: "SEMESTER_5" }),
  program_studi: z.enum([
    "ILMU_HUKUM",
    "MANAJEMEN",
    "AKUNTANSI",
    "ADMINISTRASI_NEGARA",
    "ILMU_KOMUNIKASI",
    "AGROTEKNOLOGI",
    "TEKNIK_MESIN",
    "TEKNIK_SIPIL",
    "MANAJEMEN_INFORMATIKA"
  ]),
  fakultas: z.enum(["HUKUM", "EKONOMI", "ILMU_SOSIAL_DAN_ILMU_POLITIK", "PERTANIAN", "TEKNIK"]),
  thn_akademik: z.string().min(1).openapi({ example: "2023/2024" }),
  keterangan_keperluan: z.string().min(1).max(300).openapi({ example: "Untuk keperluan beasiswa" }),
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
