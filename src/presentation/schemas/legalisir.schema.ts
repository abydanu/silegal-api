import { z } from "@hono/zod-openapi";

export const LegalisirSchema = z.object({
  tanggal_pengajuan: z.string().openapi({ example: "2024-01-15" }),
  nomor_surat: z.string().min(1).openapi({ example: "001/LEG/2024" }),
  nama_mahasiswa: z.string().min(1).openapi({ example: "John Doe" }),
  tempat_lahir: z.string().min(1).openapi({ example: "Jakarta" }),
  nim: z.string().min(1).openapi({ example: "2021001" }),
  tgl_lahir: z.string().openapi({ example: "2000-05-20" }),
  tgl_kelulusan: z.string().openapi({ example: "2024-08-15" }),
  program_studi: z.enum(["SISTEM_INFORMASI", "TEKNIK_INFORMATIKA", "MANAJEMEN_INFORMATIKA", "KOMPUTERISASI_AKUNTANSI"]),
  fakultas: z.enum(["TEKNIK", "EKONOMI", "HUKUM", "PERTANIAN", "KEGURUAN"]),
  nomor_seri_ijazah: z.string().min(1).openapi({ example: "SI-2024-001" }),
  sebanyak_ijazah: z.number().int().min(0).default(0),
  sebanyak_transkip: z.number().int().min(0).default(0),
  sebanyak_akreditasi: z.number().int().min(0).default(0),
  jumlah_legalisir: z.number().int().min(1),
});

export const LegalisirResponseSchema = z.object({
  id_data: z.number(),
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
