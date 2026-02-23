import { IMahasiswaAktifRepository } from "../../domain/repositories/IMahasiswaAktifRepository";
import { MahasiswaAktif, CreateMahasiswaAktifDTO } from "../../domain/entities/MahasiswaAktif";
import { prisma } from "../database/prisma";
import logger from "../logging/logger";
import { Semester } from "prisma/generated";

export class PrismaMahasiswaAktifRepository implements IMahasiswaAktifRepository {
  async create(data: CreateMahasiswaAktifDTO): Promise<MahasiswaAktif> {
    logger.info({ nim: data.nim, nama: data.nama_mahasiswa }, "Creating mahasiswa aktif record");
    const result = await prisma.dataPengajuan.create({
      data: {
        tanggal_pengajuan: new Date(data.tanggal_pengajuan),
        nomor_surat: data.nomor_surat,
        nama_mahasiswa: data.nama_mahasiswa,
        tempat_lahir: data.tempat_lahir,
        nim: data.nim,
        tgl_lahir: new Date(data.tgl_lahir),
        alamat_rumah: data.alamat_rumah,
        semester: data.semester as Semester,
        program_studi: data.program_studi as any,
        fakultas: data.fakultas as any,
        thn_akademik: data.thn_akademik,
        keterangan_keperluan: data.keterangan_keperluan,
      },
    });
    logger.info({ id: result.id }, "Mahasiswa aktif record created successfully");
    return result as MahasiswaAktif;
  }

  async findAll(page: number, limit: number, search: string) {
    logger.debug({ page, limit, search }, "Fetching mahasiswa aktif records");
    const where = search
      ? {
          OR: [
            { nama_mahasiswa: { contains: search, mode: "insensitive" as const } },
            { nim: { contains: search, mode: "insensitive" as const } },
            { nomor_surat: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {};

    const [total, items] = await Promise.all([
      prisma.dataPengajuan.count({ where }),
      prisma.dataPengajuan.findMany({
        where,
        orderBy: { tanggal_pengajuan: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);
    logger.info({ total, returned: items.length }, "Mahasiswa aktif records fetched");
    return { data: items as MahasiswaAktif[], total };
  }

  async findById(id: string): Promise<MahasiswaAktif | null> {
    logger.debug({ id }, "Fetching mahasiswa aktif by ID");
    const result = await prisma.dataPengajuan.findUnique({ where: { id } });
    logger.info({ id, found: !!result }, "Mahasiswa aktif fetch by ID completed");
    return result as MahasiswaAktif | null;
  }

  async update(id: string, data: Partial<CreateMahasiswaAktifDTO>): Promise<MahasiswaAktif> {
    logger.info({ id }, "Updating mahasiswa aktif record");
    const result = await prisma.dataPengajuan.update({
      where: { id },
      data: {
        ...(data.tanggal_pengajuan && { tanggal_pengajuan: new Date(data.tanggal_pengajuan) }),
        ...(data.nomor_surat && { nomor_surat: data.nomor_surat }),
        ...(data.nama_mahasiswa && { nama_mahasiswa: data.nama_mahasiswa }),
        ...(data.tempat_lahir && { tempat_lahir: data.tempat_lahir }),
        ...(data.nim && { nim: data.nim }),
        ...(data.tgl_lahir && { tgl_lahir: new Date(data.tgl_lahir) }),
        ...(data.alamat_rumah && { alamat_rumah: data.alamat_rumah }),
        ...(data.semester && { semester: data.semester as Semester }),
        ...(data.program_studi && { program_studi: data.program_studi as any }),
        ...(data.fakultas && { fakultas: data.fakultas as any }),
        ...(data.thn_akademik && { thn_akademik: data.thn_akademik }),
        ...(data.keterangan_keperluan && { keterangan_keperluan: data.keterangan_keperluan }),
      },
    });
    logger.info({ id }, "Mahasiswa aktif record updated successfully");
    return result as MahasiswaAktif;
  }

  async delete(id: string): Promise<void> {
    logger.info({ id }, "Deleting mahasiswa aktif record");
    await prisma.dataPengajuan.delete({ where: { id } });
    logger.info({ id }, "Mahasiswa aktif record deleted successfully");
  }

  async count(): Promise<number> {
    return await prisma.dataPengajuan.count();
  }

  async findRecent(limit: number): Promise<MahasiswaAktif[]> {
    return await prisma.dataPengajuan.findMany({
      orderBy: { tanggal_pengajuan: "desc" },
      take: limit,
      select: { id: true, nama_mahasiswa: true, nim: true, tanggal_pengajuan: true, nomor_surat: true, semester: true },
    }) as MahasiswaAktif[];
  }
}
