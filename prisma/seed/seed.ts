import bcrypt from "bcryptjs";
import { prisma } from "../../src/infrastructure/database/prisma";
import { ProgramStudi, Fakultas } from "@prisma/client";
import { Semester } from "../generated";

async function main() {
  console.log("🌱 Starting seed...");

  console.log("🗑️  Clearing existing data...");
  await prisma.dataPengajuan.deleteMany();
  await prisma.dataLegalisir.deleteMany();
  await prisma.admin.deleteMany();

  console.log("👤 Seeding admin users...");
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      nama: "Admin Utama",
      username: "admin",
      password: hashedPassword,
      status: "aktif",
      role: "admin",
    },
  });

  await prisma.admin.create({
    data: {
      nama: "Admin Backup",
      username: "admin2",
      password: await bcrypt.hash("admin456", 10),
      status: "aktif",
      role: "admin",
    },
  });

  console.log("✅ Created 2 admin users");

  console.log("📄 Seeding legalisir data...");

  const legalisirData = [
    {
      tanggal_pengajuan: new Date("2024-01-15"),
      nomor_surat: "001/LEG/I/2024",
      nama_mahasiswa: "Budi Santoso",
      tempat_lahir: "Jakarta",
      nim: "2021001",
      tgl_lahir: new Date("2003-05-10"),
      tgl_kelulusan: new Date("2023-10-15"),
      program_studi: ProgramStudi.ILMU_HUKUM,
      fakultas: Fakultas.HUKUM,
      nomor_seri_ijazah: "IJ-2023-001",
      sebanyak_ijazah: 2,
      sebanyak_transkip: 2,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 5,
    },
    {
      tanggal_pengajuan: new Date("2024-01-20"),
      nomor_surat: "002/LEG/I/2024",
      nama_mahasiswa: "Siti Nurhaliza",
      tempat_lahir: "Bandung",
      nim: "2021002",
      tgl_lahir: new Date("2002-08-22"),
      tgl_kelulusan: new Date("2023-11-20"),
      program_studi: ProgramStudi.MANAJEMEN,
      fakultas: Fakultas.EKONOMI,
      nomor_seri_ijazah: "IJ-2023-002",
      sebanyak_ijazah: 3,
      sebanyak_transkip: 3,
      sebanyak_akreditasi: 2,
      jumlah_legalisir: 8,
    },
    {
      tanggal_pengajuan: new Date("2024-02-05"),
      nomor_surat: "003/LEG/II/2024",
      nama_mahasiswa: "Ahmad Fauzi",
      tempat_lahir: "Surabaya",
      nim: "2021003",
      tgl_lahir: new Date("2003-03-15"),
      tgl_kelulusan: new Date("2023-12-10"),
      program_studi: ProgramStudi.TEKNIK_SIPIL,
      fakultas: Fakultas.TEKNIK,
      nomor_seri_ijazah: "IJ-2023-003",
      sebanyak_ijazah: 1,
      sebanyak_transkip: 1,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 3,
    },
    {
      tanggal_pengajuan: new Date("2024-02-10"),
      nomor_surat: "004/LEG/II/2024",
      nama_mahasiswa: "Dewi Lestari",
      tempat_lahir: "Yogyakarta",
      nim: "2021004",
      tgl_lahir: new Date("2002-11-30"),
      tgl_kelulusan: new Date("2024-01-15"),
      program_studi: ProgramStudi.ILMU_KOMUNIKASI,
      fakultas: Fakultas.ILMU_SOSIAL_DAN_ILMU_POLITIK,
      nomor_seri_ijazah: "IJ-2024-001",
      sebanyak_ijazah: 2,
      sebanyak_transkip: 2,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 5,
    },
    {
      tanggal_pengajuan: new Date("2024-02-15"),
      nomor_surat: "005/LEG/II/2024",
      nama_mahasiswa: "Rudi Hartono",
      tempat_lahir: "Semarang",
      nim: "2021005",
      tgl_lahir: new Date("2003-07-18"),
      tgl_kelulusan: new Date("2024-01-20"),
      program_studi: ProgramStudi.AKUNTANSI,
      fakultas: Fakultas.EKONOMI,
      nomor_seri_ijazah: "IJ-2024-002",
      sebanyak_ijazah: 1,
      sebanyak_transkip: 1,
      sebanyak_akreditasi: 0,
      jumlah_legalisir: 2,
    },
    {
      tanggal_pengajuan: new Date("2024-03-01"),
      nomor_surat: "006/LEG/III/2024",
      nama_mahasiswa: "Teguh Pratama",
      tempat_lahir: "Solo",
      nim: "2021006",
      tgl_lahir: new Date("2003-02-11"),
      tgl_kelulusan: new Date("2024-02-10"),
      program_studi: ProgramStudi.TEKNIK_MESIN,
      fakultas: Fakultas.TEKNIK,
      nomor_seri_ijazah: "IJ-2024-003",
      sebanyak_ijazah: 2,
      sebanyak_transkip: 2,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 5,
    },
    {
      tanggal_pengajuan: new Date("2024-03-05"),
      nomor_surat: "007/LEG/III/2024",
      nama_mahasiswa: "Nur Aisyah",
      tempat_lahir: "Bogor",
      nim: "2021007",
      tgl_lahir: new Date("2002-12-09"),
      tgl_kelulusan: new Date("2024-01-30"),
      program_studi: ProgramStudi.ADMINISTRASI_NEGARA,
      fakultas: Fakultas.ILMU_SOSIAL_DAN_ILMU_POLITIK,
      nomor_seri_ijazah: "IJ-2024-004",
      sebanyak_ijazah: 1,
      sebanyak_transkip: 2,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 4,
    },
    {
      tanggal_pengajuan: new Date("2024-03-10"),
      nomor_surat: "008/LEG/III/2024",
      nama_mahasiswa: "Bagas Saputra",
      tempat_lahir: "Madiun",
      nim: "2021008",
      tgl_lahir: new Date("2003-06-17"),
      tgl_kelulusan: new Date("2024-02-15"),
      program_studi: ProgramStudi.AGROTEKNOLOGI,
      fakultas: Fakultas.PERTANIAN,
      nomor_seri_ijazah: "IJ-2024-005",
      sebanyak_ijazah: 3,
      sebanyak_transkip: 3,
      sebanyak_akreditasi: 2,
      jumlah_legalisir: 8,
    },
    {
      tanggal_pengajuan: new Date("2024-03-15"),
      nomor_surat: "009/LEG/III/2024",
      nama_mahasiswa: "Citra Ananda",
      tempat_lahir: "Depok",
      nim: "2021009",
      tgl_lahir: new Date("2002-04-01"),
      tgl_kelulusan: new Date("2023-12-20"),
      program_studi: ProgramStudi.MANAJEMEN_INFORMATIKA,
      fakultas: Fakultas.TEKNIK,
      nomor_seri_ijazah: "IJ-2023-010",
      sebanyak_ijazah: 2,
      sebanyak_transkip: 2,
      sebanyak_akreditasi: 0,
      jumlah_legalisir: 4,
    },
    {
      tanggal_pengajuan: new Date("2024-03-20"),
      nomor_surat: "010/LEG/III/2024",
      nama_mahasiswa: "Farhan Maulana",
      tempat_lahir: "Bekasi",
      nim: "2021010",
      tgl_lahir: new Date("2003-09-22"),
      tgl_kelulusan: new Date("2024-02-28"),
      program_studi: ProgramStudi.AKUNTANSI,
      fakultas: Fakultas.EKONOMI,
      nomor_seri_ijazah: "IJ-2024-006",
      sebanyak_ijazah: 1,
      sebanyak_transkip: 1,
      sebanyak_akreditasi: 1,
      jumlah_legalisir: 3,
    },
  ];

  for (const data of legalisirData) {
    await prisma.dataLegalisir.create({ data });
  }

  console.log("✅ Created " + legalisirData.length + " legalisir records");

  console.log("🎓 Seeding mahasiswa aktif data...");

  const mahasiswaAktifData = [
    {
      tanggal_pengajuan: new Date("2024-03-01"),
      nomor_surat: "008/MA/III/2024",
      nama_mahasiswa: "Yoga Saputra",
      tempat_lahir: "Kediri",
      nim: "2023003",
      tgl_lahir: new Date("2005-01-12"),
      alamat_rumah: "Jl. Ahmad Dahlan No. 21, Kediri",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.TEKNIK_SIPIL,
      fakultas: Fakultas.TEKNIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan beasiswa",
    },
    {
      tanggal_pengajuan: new Date("2024-03-05"),
      nomor_surat: "009/MA/III/2024",
      nama_mahasiswa: "Aulia Rahma",
      tempat_lahir: "Cirebon",
      nim: "2023004",
      tgl_lahir: new Date("2005-06-30"),
      alamat_rumah: "Jl. Kartini No. 11, Cirebon",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.ILMU_KOMUNIKASI,
      fakultas: Fakultas.ILMU_SOSIAL_DAN_ILMU_POLITIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan organisasi",
    },
    {
      tanggal_pengajuan: new Date("2024-03-10"),
      nomor_surat: "010/MA/III/2024",
      nama_mahasiswa: "Raka Aditya",
      tempat_lahir: "Tangerang",
      nim: "2023005",
      tgl_lahir: new Date("2005-09-14"),
      alamat_rumah: "Jl. Melati No. 9, Tangerang",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.MANAJEMEN,
      fakultas: Fakultas.EKONOMI,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan lomba",
    },
    {
      tanggal_pengajuan: new Date("2024-03-15"),
      nomor_surat: "011/MA/III/2024",
      nama_mahasiswa: "Salsa Putri",
      tempat_lahir: "Padang",
      nim: "2023006",
      tgl_lahir: new Date("2005-02-27"),
      alamat_rumah: "Jl. Sudirman No. 45, Padang",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.AGROTEKNOLOGI,
      fakultas: Fakultas.PERTANIAN,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan KKN",
    },
    {
      tanggal_pengajuan: new Date("2024-03-20"),
      nomor_surat: "012/MA/III/2024",
      nama_mahasiswa: "Ilham Fadillah",
      tempat_lahir: "Banjarmasin",
      nim: "2023007",
      tgl_lahir: new Date("2005-04-18"),
      alamat_rumah: "Jl. Veteran No. 88, Banjarmasin",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.MANAJEMEN_INFORMATIKA,
      fakultas: Fakultas.TEKNIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan penelitian",
    },
    {
      tanggal_pengajuan: new Date("2024-01-10"),
      nomor_surat: "001/MA/I/2024",
      nama_mahasiswa: "Andi Wijaya",
      tempat_lahir: "Jakarta",
      nim: "2022001",
      tgl_lahir: new Date("2004-02-14"),
      alamat_rumah: "Jl. Sudirman No. 123, Jakarta",
      semester: Semester.SEMESTER_5,
      program_studi: ProgramStudi.ILMU_HUKUM,
      fakultas: Fakultas.HUKUM,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan beasiswa",
    },
    {
      tanggal_pengajuan: new Date("2024-01-12"),
      nomor_surat: "002/MA/I/2024",
      nama_mahasiswa: "Maya Putri",
      tempat_lahir: "Bandung",
      nim: "2022002",
      tgl_lahir: new Date("2004-06-20"),
      alamat_rumah: "Jl. Merdeka No. 45, Bandung",
      semester: Semester.SEMESTER_5,
      program_studi: ProgramStudi.MANAJEMEN,
      fakultas: Fakultas.EKONOMI,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan magang",
    },
    {
      tanggal_pengajuan: new Date("2024-01-18"),
      nomor_surat: "003/MA/I/2024",
      nama_mahasiswa: "Rizki Ramadhan",
      tempat_lahir: "Surabaya",
      nim: "2022003",
      tgl_lahir: new Date("2004-09-05"),
      alamat_rumah: "Jl. Pahlawan No. 78, Surabaya",
      semester: Semester.SEMESTER_5,
      program_studi: ProgramStudi.TEKNIK_MESIN,
      fakultas: Fakultas.TEKNIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan administrasi",
    },
    {
      tanggal_pengajuan: new Date("2024-02-01"),
      nomor_surat: "004/MA/II/2024",
      nama_mahasiswa: "Fitri Handayani",
      tempat_lahir: "Medan",
      nim: "2022004",
      tgl_lahir: new Date("2004-04-12"),
      alamat_rumah: "Jl. Gatot Subroto No. 90, Medan",
      semester: Semester.SEMESTER_5,
      program_studi: ProgramStudi.ADMINISTRASI_NEGARA,
      fakultas: Fakultas.ILMU_SOSIAL_DAN_ILMU_POLITIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan beasiswa prestasi",
    },
    {
      tanggal_pengajuan: new Date("2024-02-08"),
      nomor_surat: "005/MA/II/2024",
      nama_mahasiswa: "Dimas Prasetyo",
      tempat_lahir: "Malang",
      nim: "2022005",
      tgl_lahir: new Date("2004-01-25"),
      alamat_rumah: "Jl. Veteran No. 56, Malang",
      semester: Semester.SEMESTER_5,
      program_studi: ProgramStudi.AGROTEKNOLOGI,
      fakultas: Fakultas.PERTANIAN,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan penelitian",
    },
    {
      tanggal_pengajuan: new Date("2024-02-12"),
      nomor_surat: "006/MA/II/2024",
      nama_mahasiswa: "Lina Marlina",
      tempat_lahir: "Palembang",
      nim: "2023001",
      tgl_lahir: new Date("2005-03-08"),
      alamat_rumah: "Jl. Ahmad Yani No. 34, Palembang",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.MANAJEMEN_INFORMATIKA,
      fakultas: Fakultas.TEKNIK,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan KKN",
    },
    {
      tanggal_pengajuan: new Date("2024-02-18"),
      nomor_surat: "007/MA/II/2024",
      nama_mahasiswa: "Hendra Gunawan",
      tempat_lahir: "Makassar",
      nim: "2023002",
      tgl_lahir: new Date("2005-07-16"),
      alamat_rumah: "Jl. Diponegoro No. 12, Makassar",
      semester: Semester.SEMESTER_3,
      program_studi: ProgramStudi.AKUNTANSI,
      fakultas: Fakultas.EKONOMI,
      thn_akademik: "2023/2024",
      keterangan_keperluan: "Untuk keperluan lomba",
    },
  ];

  for (const data of mahasiswaAktifData) {
    await prisma.dataPengajuan.create({ data });
  }

  console.log("✅ Created " + mahasiswaAktifData.length + " mahasiswa aktif records");

  console.log("\n🎉 Seed completed successfully!");
  console.log("\n📋 Login credentials:");
  console.log("   Username: admin");
  console.log("   Password: admin123");
  console.log("\n   Username: admin2");
  console.log("   Password: admin456");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
