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
      description: "Development server",
    },
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
                  id_admin: { type: "number" },
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
            enum: ["SISTEM_INFORMASI", "TEKNIK_INFORMATIKA", "MANAJEMEN_INFORMATIKA", "KOMPUTERISASI_AKUNTANSI"],
          },
          fakultas: {
            type: "string",
            enum: ["TEKNIK", "EKONOMI", "HUKUM", "PERTANIAN", "KEGURUAN"],
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
          semester: { type: "string", example: "6" },
          program_studi: {
            type: "string",
            enum: ["SISTEM_INFORMASI", "TEKNIK_INFORMATIKA", "MANAJEMEN_INFORMATIKA", "KOMPUTERISASI_AKUNTANSI"],
          },
          fakultas: {
            type: "string",
            enum: ["TEKNIK", "EKONOMI", "HUKUM", "PERTANIAN", "KEGURUAN"],
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
          { name: "page", in: "query", schema: { type: "number" } },
          { name: "limit", in: "query", schema: { type: "number" } },
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
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
        responses: {
          200: { description: "Detail legalisir" },
          404: { description: "Data tidak ditemukan" },
        },
      },
      put: {
        tags: ["Legalisir"],
        summary: "Update legalisir",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
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
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
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
          { name: "page", in: "query", schema: { type: "number" } },
          { name: "limit", in: "query", schema: { type: "number" } },
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
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
        responses: {
          200: { description: "Detail mahasiswa aktif" },
          404: { description: "Data tidak ditemukan" },
        },
      },
      put: {
        tags: ["Mahasiswa Aktif"],
        summary: "Update mahasiswa aktif",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
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
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "number" } }],
        responses: {
          200: { description: "Data berhasil dihapus" },
        },
      },
    },
  },
};
