import { ILegalisirRepository } from "../../domain/repositories/ILegalisirRepository.js";
import { Legalisir, CreateLegalisirDTO } from "../../domain/entities/Legalisir.js";
import { prisma } from "../database/prisma.js";
import logger from "../logging/logger.js";

export class PrismaLegalisirRepository implements ILegalisirRepository {
  async create(data: CreateLegalisirDTO): Promise<Legalisir> {
    logger.info({ nim: data.nim, nama: data.nama_mahasiswa }, "Creating legalisir record");
    const result = await prisma.dataLegalisir.create({
      data: {
        tanggal_pengajuan: new Date(data.tanggal_pengajuan),
        nomor_surat: data.nomor_surat,
        nama_mahasiswa: data.nama_mahasiswa,
        tempat_lahir: data.tempat_lahir,
        nim: data.nim,
        tgl_lahir: new Date(data.tgl_lahir),
        tgl_kelulusan: new Date(data.tgl_kelulusan),
        program_studi: data.program_studi as any,
        fakultas: data.fakultas as any,
        nomor_seri_ijazah: data.nomor_seri_ijazah,
        sebanyak_ijazah: data.sebanyak_ijazah,
        sebanyak_transkip: data.sebanyak_transkip,
        sebanyak_akreditasi: data.sebanyak_akreditasi,
        jumlah_legalisir: data.jumlah_legalisir,
      },
    });
    logger.info({ id: result.id }, "Legalisir record created successfully");
    return result as Legalisir;
  }

  async findAll(page: number, limit: number, search: string) {
    logger.debug({ page, limit, search }, "Fetching legalisir records");
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
      prisma.dataLegalisir.count({ where }),
      prisma.dataLegalisir.findMany({
        where,
        orderBy: { tanggal_pengajuan: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);
    logger.info({ total, returned: items.length }, "Legalisir records fetched");
    return { items: items as Legalisir[], total };
  }

  async findById(id: string): Promise<Legalisir | null> {
    logger.debug({ id }, "Fetching legalisir by ID");
    const result = await prisma.dataLegalisir.findUnique({ where: { id } });
    logger.info({ id, found: !!result }, "Legalisir fetch by ID completed");
    return result as Legalisir | null;
  }

  async update(id: string, data: Partial<CreateLegalisirDTO>): Promise<Legalisir> {
    logger.info({ id }, "Updating legalisir record");
    const result = await prisma.dataLegalisir.update({
      where: { id },
      data: {
        ...(data.tanggal_pengajuan && { tanggal_pengajuan: new Date(data.tanggal_pengajuan) }),
        ...(data.nomor_surat && { nomor_surat: data.nomor_surat }),
        ...(data.nama_mahasiswa && { nama_mahasiswa: data.nama_mahasiswa }),
        ...(data.tempat_lahir && { tempat_lahir: data.tempat_lahir }),
        ...(data.nim && { nim: data.nim }),
        ...(data.tgl_lahir && { tgl_lahir: new Date(data.tgl_lahir) }),
        ...(data.tgl_kelulusan && { tgl_kelulusan: new Date(data.tgl_kelulusan) }),
        ...(data.program_studi && { program_studi: data.program_studi as any }),
        ...(data.fakultas && { fakultas: data.fakultas as any }),
        ...(data.nomor_seri_ijazah && { nomor_seri_ijazah: data.nomor_seri_ijazah }),
        ...(data.sebanyak_ijazah !== undefined && { sebanyak_ijazah: data.sebanyak_ijazah }),
        ...(data.sebanyak_transkip !== undefined && { sebanyak_transkip: data.sebanyak_transkip }),
        ...(data.sebanyak_akreditasi !== undefined && { sebanyak_akreditasi: data.sebanyak_akreditasi }),
        ...(data.jumlah_legalisir !== undefined && { jumlah_legalisir: data.jumlah_legalisir }),
      },
    });
    logger.info({ id }, "Legalisir record updated successfully");
    return result as Legalisir;
  }

  async delete(id: string): Promise<void> {
    logger.info({ id }, "Deleting legalisir record");
    await prisma.dataLegalisir.delete({ where: { id } });
    logger.info({ id }, "Legalisir record deleted successfully");
  }

  async count(): Promise<number> {
    return await prisma.dataLegalisir.count();
  }

  async findRecent(limit: number): Promise<Legalisir[]> {
    return await prisma.dataLegalisir.findMany({
      orderBy: { tanggal_pengajuan: "desc" },
      take: limit,
      select: { id: true, nama_mahasiswa: true, nim: true, tanggal_pengajuan: true, nomor_surat: true },
    }) as any;
  }
}
