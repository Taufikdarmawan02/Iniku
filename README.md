# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File v7)

Paket kode lengkap dengan alur registrasi & login sebelum *checkout*, tampilan riwayat pesanan pembeli, pencarian pesanan per *username* pada admin, serta laporan penjualan harian, bulanan, dan tahunan.

## Daftar File
1. `index.html` — **Halaman Pembeli**:
   - **Registrasi & Login Sebelum Checkout**: Pembeli wajib melakukan registrasi atau login sesuai `username` sebelum dapat melanjutkan pengisian metode pengiriman & *checkout* ke WhatsApp (akun demo: `budi` / `123` dan `siti` / `123`).
   - **Lihat Yang Sudah Dipesan**: Pembeli yang login dapat melihat seluruh daftar bibit yang sudah dipesan, status pesanan, dan nomor surat jalan/resi melalui tombol **Lihat Yang Sudah Dipesan**.
   - **Aturan Pengiriman**: Validasi **Diantar Armada Toko (min 40 – max 200 kotak)** atau **Ambil di Tempat**.
2. `admin.html` — **Halaman Admin Toko** (Login: `admin` / `1234`):
   - **Kelola Pesanan Masuk**: Pencarian pesanan sesuai `username` pembeli, filter status, update status transaksi, input resi/surat jalan, serta log notifikasi WhatsApp otomatis (stok bibit tidak berkurang otomatis setelah transaksi).
   - **Laporan Harian, Bulanan & Tahunan**: Rekap transaksi, jumlah kotak terjual, dan omzet berdasarkan tanggal harian, bulan, atau tahun beserta fitur unduh CSV.
   - **Kelola Stok Bibit**: Tambah bibit baru, **Update** harga/stok/detail bibit (satuan kotak), dan **Hapus** bibit.
   - **Profil Pemilik, WA Toko & Pengiriman**: **Update** dan **Hapus** nama pemilik toko, nomor WhatsApp tujuan toko, serta batas minimal/maksimal pengantaran.
3. `app.js` — **State & Sinkronisasi Real-Time**: Menghubungkan data antara `index.html` dan `admin.html` melalui `localStorage`.
