// Enum to Human Readable Mapper

export const ProgramStudiMap: Record<string, string> = {
  ILMU_HUKUM: "Ilmu Hukum",
  MANAJEMEN: "Manajemen",
  AKUNTANSI: "Akuntansi",
  ADMINISTRASI_NEGARA: "Administrasi Negara",
  ILMU_KOMUNIKASI: "Ilmu Komunikasi",
  AGROTEKNOLOGI: "Agroteknologi",
  TEKNIK_MESIN: "Teknik Mesin",
  TEKNIK_SIPIL: "Teknik Sipil",
  MANAJEMEN_INFORMATIKA: "Manajemen Informatika",
};

export const FakultasMap: Record<string, string> = {
  HUKUM: "Hukum",
  EKONOMI: "Ekonomi",
  ILMU_SOSIAL_DAN_ILMU_POLITIK: "Ilmu Sosial dan Ilmu Politik",
  PERTANIAN: "Pertanian",
  TEKNIK: "Teknik",
};

export const SemesterMap: Record<string, string> = {
  SEMESTER_1: "Semester 1",
  SEMESTER_2: "Semester 2",
  SEMESTER_3: "Semester 3",
  SEMESTER_4: "Semester 4",
  SEMESTER_5: "Semester 5",
  SEMESTER_6: "Semester 6",
  SEMESTER_7: "Semester 7",
  SEMESTER_8: "Semester 8",
};

// Reverse mapping for input (Human Readable to Enum)
export const ProgramStudiReverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(ProgramStudiMap).map(([key, value]) => [value, key])
);

export const FakultasReverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(FakultasMap).map(([key, value]) => [value, key])
);

export const SemesterReverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(SemesterMap).map(([key, value]) => [value, key])
);

// Helper functions
export function toHumanReadable(enumValue: string, type: 'prodi' | 'fakultas' | 'semester'): string {
  switch (type) {
    case 'prodi':
      return ProgramStudiMap[enumValue] || enumValue;
    case 'fakultas':
      return FakultasMap[enumValue] || enumValue;
    case 'semester':
      return SemesterMap[enumValue] || enumValue;
  }
}

export function toEnumValue(humanValue: string, type: 'prodi' | 'fakultas' | 'semester'): string {
  switch (type) {
    case 'prodi':
      return ProgramStudiReverseMap[humanValue] || humanValue;
    case 'fakultas':
      return FakultasReverseMap[humanValue] || humanValue;
    case 'semester':
      return SemesterReverseMap[humanValue] || humanValue;
  }
}
