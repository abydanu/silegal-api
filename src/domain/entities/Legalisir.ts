export interface Legalisir {
  id: string;
  tanggal_pengajuan: Date;
  nomor_surat: string;
  nama_mahasiswa: string;
  tempat_lahir: string;
  nim: string;
  tgl_lahir: Date;
  tgl_kelulusan: Date;
  program_studi: string;
  fakultas: string;
  nomor_seri_ijazah: string;
  sebanyak_ijazah: number;
  sebanyak_transkip: number;
  sebanyak_akreditasi: number;
  jumlah_legalisir: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLegalisirDTO {
  tanggal_pengajuan: string;
  nomor_surat: string;
  nama_mahasiswa: string;
  tempat_lahir: string;
  nim: string;
  tgl_lahir: string;
  tgl_kelulusan: string;
  program_studi: string;
  fakultas: string;
  nomor_seri_ijazah: string;
  sebanyak_ijazah: number;
  sebanyak_transkip: number;
  sebanyak_akreditasi: number;
  jumlah_legalisir: number;
}