# Pawang AI

Landing page super simpel: judul "Pawang AI" + tombol **Masuk** dan **Daftar Gratis**, keduanya login pakai Google (via NextAuth.js).

## 1. Install dependencies

```bash
pnpm install
```

## 2. Bikin Google OAuth Client ID

1. Buka https://console.cloud.google.com/apis/credentials
2. Buat project baru (atau pakai yang sudah ada)
3. Klik **Create Credentials** > **OAuth client ID**
4. Application type: **Web application**
5. Authorized redirect URIs, isi:
   - `http://localhost:3000/api/auth/callback/google` (untuk development)
   - `https://domaink.com/api/auth/callback/google` (untuk production, ganti sesuai domain kamu)
6. Setelah dibuat, copy **Client ID** dan **Client Secret**.

## 3. Isi environment variables

Copy `.env.local.example` jadi `.env.local`, lalu isi:

```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...   # generate random string, misal menggunakan openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
```

## 4. Jalankan

```bash
pnpm run dev
```

Buka http://localhost:3000 — akan muncul tulisan "Pawang AI" dan dua tombol yang langsung mengarahkan ke Google sign-in.
