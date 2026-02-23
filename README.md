# API Legalisir - Sistem Legalisasi Digital

API untuk sistem legalisasi digital Alumni dan Mahasiswa Aktif, dikelola oleh Staff Akademik (Admin).

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0
- PostgreSQL database
- Node.js >= 18 (untuk production deployment)

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd api-silegal

# Install dependencies
bun install

# Setup environment variables
cp .env.example .env
# Edit .env dengan database credentials Anda

# Generate Prisma Client
bun run db:generate

# Push database schema
bun run db:push

# Seed database (optional)
bun run db:seed
```

### Development

```bash
# Start development server
bun run dev

# Server akan berjalan di http://localhost:3000
# Swagger docs: http://localhost:3000/docs
```

## 📚 API Documentation

Setelah server berjalan, akses dokumentasi API di:
- Swagger UI: `http://localhost:3000/docs`
- OpenAPI JSON: `http://localhost:3000/openapi.json`

## 🔑 Default Login

Setelah menjalankan seeder:
- Username: `admin`
- Password: `admin123`

## 📁 Project Structure

```
api-silegal/
├── src/
│   ├── application/        # Use cases / business logic
│   ├── domain/            # Entities & repository interfaces
│   ├── infrastructure/    # Database, JWT, logging
│   ├── presentation/      # Controllers, routes, schemas
│   ├── di/               # Dependency injection container
│   └── index.ts          # App entry point
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed/             # Database seeders
├── api/                  # Vercel serverless functions
└── vercel.json          # Vercel configuration
```

## 🛠️ Available Scripts

```bash
bun run dev              # Start development server
bun run build            # Build for production
bun run start            # Start production server
bun run db:generate      # Generate Prisma Client
bun run db:push          # Push schema to database
bun run db:migrate       # Run migrations
bun run db:studio        # Open Prisma Studio
bun run db:seed          # Seed database
```

## 🌐 API Endpoints

### Public Endpoints
- `POST /api/auth/login` - Login admin
- `POST /api/legalisir` - Submit permohonan legalisir
- `POST /api/mahasiswa-aktif` - Submit surat keterangan mahasiswa aktif

### Protected Endpoints (Requires JWT)
- `POST /api/auth/logout` - Logout admin
- `GET /api/legalisir` - Get all legalisir data
- `GET /api/legalisir/:id` - Get legalisir by ID
- `PUT /api/legalisir/:id` - Update legalisir
- `DELETE /api/legalisir/:id` - Delete legalisir
- `GET /api/mahasiswa-aktif` - Get all mahasiswa aktif data
- `GET /api/mahasiswa-aktif/:id` - Get mahasiswa aktif by ID
- `PUT /api/mahasiswa-aktif/:id` - Update mahasiswa aktif
- `DELETE /api/mahasiswa-aktif/:id` - Delete mahasiswa aktif

## 🚢 Deployment

### Deploy to Vercel

Lihat [DEPLOYMENT.md](./DEPLOYMENT.md) untuk panduan lengkap deployment ke Vercel.

Quick steps:
1. Push code ke GitHub
2. Import project di Vercel
3. Set environment variables
4. Deploy!

## 🏗️ Tech Stack

- **Runtime**: Bun / Node.js
- **Framework**: Hono
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: Zod
- **Logging**: Pino
- **Documentation**: Swagger/OpenAPI

## 📝 Environment Variables

```env
DATABASE_URL="postgresql://..."
PORT=3000
NODE_ENV="development"
JWT_SECRET="your-secret-key"
ALLOWED_ORIGIN="*"
```

## 🧪 Testing

```bash
# Test API health
curl http://localhost:3000/health

# Test login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

## 📄 License

MIT