# QR-Generator-App

QR-Generator-App adalah aplikasi web untuk membuat QR Code berdasarkan URL yang dimasukkan oleh pengguna. Aplikasi ini menggunakan API pihak ketiga untuk menghasilkan QR Code dan menyediakan opsi untuk mengunduh QR Code yang dihasilkan.

## Fitur
- Membuat QR Code dari URL yang dimasukkan.
- Menampilkan QR Code yang dihasilkan di layar.
- Mengunduh QR Code sebagai file gambar.
- Notifikasi berbasis SweetAlert2 untuk memberi tahu status proses (berhasil atau gagal).
- Desain modern dan responsif dengan Tailwind CSS.

## Teknologi yang Digunakan
- **React**: Framework JavaScript untuk membangun antarmuka pengguna.
- **SweetAlert2**: Untuk notifikasi interaktif (misalnya, pesan sukses atau error).
- **API QR Server**: Digunakan untuk menghasilkan QR Code dari data.
- **Tailwind CSS**: Framework CSS untuk desain antarmuka pengguna yang responsif dan mudah disesuaikan.

## Prasyarat
Sebelum memulai, pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (termasuk npm)
- [Yarn](https://yarnpkg.com/) (opsional jika menggunakan Yarn).

## Cara Memulai

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini secara lokal:

### 1. Clone repositori
Clone repositori ini ke direktori lokal Anda:

```bash
git clone https://github.com/alfinhimawan/QR-Generator-App.git
```

### 2. Masuk ke direktori proyek
```bash
cd QR-Generator-App
```

### 3. Install dependensi
Pilih salah satu dari dua cara berikut untuk menginstal dependensi:

- **Menggunakan Yarn:**
  ```bash
  yarn install
  ```

- **Menggunakan npm:**
  ```bash
  npm install
  ```

### 4. Jalankan aplikasi
Setelah semua dependensi terinstal, jalankan aplikasi menggunakan salah satu cara berikut:

- **Menggunakan Yarn:**
  ```bash
  yarn dev
  ```

- **Menggunakan npm:**
  ```bash
  npm start
  ```

Aplikasi akan terbuka di browser Anda di `http://localhost:3000`.

## Cara Menggunakan
1. Masukkan URL pada kolom input.
2. Klik tombol **Buat QR Code**.
3. QR Code akan ditampilkan di layar.
4. Klik tombol **Download QR Code** untuk mengunduh QR Code sebagai file gambar.