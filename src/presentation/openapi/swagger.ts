export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Legalisir API",
    version: "1.0.0",
    description: "API untuk sistem legalisir dan surat keterangan mahasiswa aktif",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server",
    },
    ...(process.env.SKIP_NGROK !== "true" ? [{
      url: "https://suited-enormously-donkey.ngrok-free.app",
      description: "Development server",
    }] : []),
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Error: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          message: { type: "string" },
        },
      },
      LoginRequest: {
        type: "object",
        required: ["username", "password"],
        properties: {
          username: { type: "string", example: "admin" },
          password: { type: "string", example: "password123" },
        },
      },
      LoginResponse: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          message: { type: "string" },
          data: {
            type: "object",
            properties: {
              token: { type: "string" },
              admin: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  nama_admin: { type: "string" },
                  username: { type: "string" },
                  role: { type: "string" },
                },
              },
            },
          },
        },
      },
      LegalisirRequest: {
        type: "object",
        required: [
          "tanggal_pengajuan",
          "nomor_surat",
          "nama_mahasiswa",
          "tempat_lahir",
          "nim",
          "tgl_lahir",
          "tgl_kelulusan",
          "program_studi",
          "fakultas",
          "nomor_seri_ijazah",
          "jumlah_legalisir",
        ],
        properties: {
          tanggal_pengajuan: { type: "string", format: "date", example: "2024-01-15" },
          nomor_surat: { type: "string", example: "001/LEG/2024" },
          nama_mahasiswa: { type: "string", example: "John Doe" },
          tempat_lahir: { type: "string", example: "Jakarta" },
          nim: { type: "string", example: "2021001" },
          tgl_lahir: { type: "string", format: "date", example: "2000-05-20" },
          tgl_kelulusan: { type: "string", format: "date", example: "2024-08-15" },
          program_studi: {
            type: "string",
            enum: ["ILMU_HUKUM", "MANAJEMEN", "AKUNTANSI", "ADMINISTRASI_NEGARA", "ILMU_KOMUNIKASI", "AGROTEKNOLOGI", "TEKNIK_MESIN", "TEKNIK_SIPIL", "MANAJEMEN_INFORMATIKA"],
          },
          fakultas: {
            type: "string",
            enum: ["HUKUM", "EKONOMI", "ILMU_SOSIAL_DAN_ILMU_POLITIK", "PERTANIAN", "TEKNIK"],
          },
          nomor_seri_ijazah: { type: "string", example: "SI-2024-001" },
          sebanyak_ijazah: { type: "number", default: 0 },
          sebanyak_transkip: { type: "number", default: 0 },
          sebanyak_akreditasi: { type: "number", default: 0 },
          jumlah_legalisir: { type: "number", minimum: 1 },
        },
      },
      MahasiswaAktifRequest: {
        type: "object",
        required: [
          "tanggal_pengajuan",
          "nomor_surat",
          "nama_mahasiswa",
          "tempat_lahir",
          "nim",
          "tgl_lahir",
          "alamat_rumah",
          "semester",
          "program_studi",
          "fakultas",
          "thn_akademik",
          "keterangan_keperluan",
        ],
        properties: {
          tanggal_pengajuan: { type: "string", format: "date", example: "2024-01-15" },
          nomor_surat: { type: "string", example: "001/MA/2024" },
          nama_mahasiswa: { type: "string", example: "Jane Doe" },
          tempat_lahir: { type: "string", example: "Bandung" },
          nim: { type: "string", example: "2021002" },
          tgl_lahir: { type: "string", format: "date", example: "2001-03-10" },
          alamat_rumah: { type: "string", example: "Jl. Merdeka No. 10" },
          semester: { 
            type: "string",
            enum: ["SEMESTER_1", "SEMESTER_2", "SEMESTER_3", "SEMESTER_4", "SEMESTER_5", "SEMESTER_6", "SEMESTER_7", "SEMESTER_8"],
            example: "SEMESTER_5"
          },
          program_studi: {
            type: "string",
            enum: ["ILMU_HUKUM", "MANAJEMEN", "AKUNTANSI", "ADMINISTRASI_NEGARA", "ILMU_KOMUNIKASI", "AGROTEKNOLOGI", "TEKNIK_MESIN", "TEKNIK_SIPIL", "MANAJEMEN_INFORMATIKA"],
          },
          fakultas: {
            type: "string",
            enum: ["HUKUM", "EKONOMI", "ILMU_SOSIAL_DAN_ILMU_POLITIK", "PERTANIAN", "TEKNIK"],
          },
          thn_akademik: { type: "string", example: "2023/2024" },
          keterangan_keperluan: { type: "string", maxLength: 300, example: "Untuk keperluan beasiswa" },
        },
      },
    },
  },
  paths: {
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login admin",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" },
            },
          },
        },
        responses: {
          200: {
            description: "Login berhasil",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/LoginResponse" },
              },
            },
          },
          401: {
            description: "Username atau password salah",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },
    "/api/auth/logout": {
      post: {
        tags: ["Auth"],
        summary: "Logout admin",
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: "Logout berhasil",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
      },
    },
    "/api/legalisir": {
      post: {
        tags: ["Legalisir"],
        summary: "Buat permohonan legalisir baru",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LegalisirRequest" },
            },
          },
        },
        responses: {
          201: {
            description: "Permohonan berhasil dibuat",
          },
        },
      },
      get: {
        tags: ["Legalisir"],
        summary: "Dapatkan daftar legalisir",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "page", in: "query", schema: { type: "string" } },
          { name: "limit", in: "query", schema: { type: "string" } },
          { name: "search", in: "query", schema: { type: "string" } },
        ],
        responses: {
          200: {
            description: "Daftar legalisir",
          },
        },
      },
    },
    "/api/legalisir/{id}": {
      get: {
        tags: ["Legalisir"],
        summary: "Dapatkan detail legalisir",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Detail legalisir" },
          404: { description: "Data tidak ditemukan" },
        },
      },
      put: {
        tags: ["Legalisir"],
        summary: "Update legalisir",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LegalisirRequest" },
            },
          },
        },
        responses: {
          200: { description: "Data berhasil diperbarui" },
        },
      },
      delete: {
        tags: ["Legalisir"],
        summary: "Hapus legalisir",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Data berhasil dihapus" },
        },
      },
    },
    "/api/mahasiswa-aktif": {
      post: {
        tags: ["Mahasiswa Aktif"],
        summary: "Buat permohonan surat keterangan mahasiswa aktif",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/MahasiswaAktifRequest" },
            },
          },
        },
        responses: {
          201: { description: "Permohonan berhasil dibuat" },
        },
      },
      get: {
        tags: ["Mahasiswa Aktif"],
        summary: "Dapatkan daftar mahasiswa aktif",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "page", in: "query", schema: { type: "string" } },
          { name: "limit", in: "query", schema: { type: "string" } },
          { name: "search", in: "query", schema: { type: "string" } },
        ],
        responses: {
          200: { description: "Daftar mahasiswa aktif" },
        },
      },
    },
    "/api/mahasiswa-aktif/{id}": {
      get: {
        tags: ["Mahasiswa Aktif"],
        summary: "Dapatkan detail mahasiswa aktif",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Detail mahasiswa aktif" },
          404: { description: "Data tidak ditemukan" },
        },
      },
      put: {
        tags: ["Mahasiswa Aktif"],
        summary: "Update mahasiswa aktif",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/MahasiswaAktifRequest" },
            },
          },
        },
        responses: {
          200: { description: "Data berhasil diperbarui" },
        },
      },
      delete: {
        tags: ["Mahasiswa Aktif"],
        summary: "Hapus mahasiswa aktif",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Data berhasil dihapus" },
        },
      },
    },
    "/api/mahasiswa-aktif/{id}/print": {
      get: {
        tags: ["Mahasiswa Aktif"],
        summary: "Cetak surat keterangan mahasiswa aktif (PDF)",
        description: "Generate dan download PDF surat keterangan dengan 2 format berbeda: status-aktif atau beasiswa",
        security: [{ bearerAuth: [] }],
        parameters: [
          { 
            name: "id", 
            in: "path", 
            required: true, 
            schema: { type: "string" },
            description: "ID data mahasiswa aktif"
          },
          {
            name: "type",
            in: "query",
            required: false,
            schema: {
              type: "string",
              enum: ["status-aktif", "beasiswa"],
              default: "status-aktif"
            },
            description: "Tipe surat yang akan dicetak"
          }
        ],
        responses: {
          200: { 
            description: "PDF file surat keterangan",
            content: {
              "application/pdf": {
                schema: {
                  type: "string",
                  format: "binary"
                }
              }
            }
          },
          404: { 
            description: "Data tidak ditemukan",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          },
          401: {
            description: "Unauthorized - Token tidak valid",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" }
              }
            }
          }
        },
      },
    },
  },
};
