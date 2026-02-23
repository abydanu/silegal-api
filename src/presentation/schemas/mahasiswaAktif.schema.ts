import { z } from "@hono/zod-openapi";

export const MahasiswaAktifSchema = z.object({
  tanggal_pengajuan: z.string().openapi({ example: "2024-01-15" }),
  nomor_surat: z.string().min(1).openapi({ example: "001/MA/2024" }),
  nama_mahasiswa: z.string().min(1).openapi({ example: "Jane Doe" }),
  tempat_lahir: z.string().min(1).openapi({ example: "Bandung" }),
  nim: z.string().min(1).openapi({ example: "2021002" }),
  tgl_lahir: z.string().openapi({ example: "2001-03-10" }),
  alamat_rumah: z.string().min(1).openapi({ example: "Jl. Merdeka No. 10" }),
  semester: z.string().min(1).openapi({ example: "6" }),
  program_studi: z.enum(["SISTEM_INFORMASI", "TEKNIK_INFORMATIKA", "MANAJEMEN_INFORMATIKA", "KOMPUTERISASI_AKUNTANSI"]),
  fakultas: z.enum(["TEKNIK", "EKONOMI", "HUKUM", "PERTANIAN", "KEGURUAN"]),
  thn_akademik: z.string().min(1).openapi({ example: "2023/2024" }),
  keterangan_keperluan: z.string().min(1).max(300).openapi({ example: "Untuk keperluan beasiswa" }),
});

export const MahasiswaAktifResponseSchema = z.object({
  id_data: z.number(),
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
