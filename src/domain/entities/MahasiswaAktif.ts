export interface MahasiswaAktif {
  id: string;
  tanggal_pengajuan: Date;
  nomor_surat: string;
  nama_mahasiswa: string;
  tempat_lahir: string;
  nim: string;
  tgl_lahir: Date;
  alamat_rumah: string;
  semester: string;
  program_studi: string;
  fakultas: string;
  thn_akademik: string;
  keterangan_keperluan: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMahasiswaAktifDTO {
  tanggal_pengajuan: string;
  nomor_surat: string;
  nama_mahasiswa: string;
  tempat_lahir: string;
  nim: string;
  tgl_lahir: string;
  alamat_rumah: string;
  semester: string;
  program_studi: string;
  fakultas: string;
  thn_akademik: string;
  keterangan_keperluan: string;
}
