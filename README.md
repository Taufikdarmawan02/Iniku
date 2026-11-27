# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File v2)

Paket kode ini mencakup pembaruan pengelolaan **Profil Pemilik & WhatsApp Toko**, aturan **Pengiriman Diantar (Min 4.000 - Max 20.000 batang) / Ambil di Tempat**, serta aksi **Update & Hapus** pada stok bibit.

## Daftar File
1. `index.html` — **Halaman Pembeli**: Menampilkan nama pemilik & nomor WhatsApp toko secara dinamis, validasi keranjang untuk metode **Diantar Armada Toko (min 4.000 – max 20.000 batang)** atau **Ambil di Tempat**, dan *checkout* ke WhatsApp toko.
2. `admin.html` — **Halaman Admin Toko** (Login: `admin` / `1234`):
   - Tab **Kelola Pesanan Masuk**: Verifikasi pembayaran, input surat jalan/resi, pemotongan stok otomatis, dan log notifikasi WhatsApp otomatis.
   - Tab **Kelola Stok Bibit**: Tambah bibit baru, **Edit (Update)** harga/stok/detail bibit, dan **Hapus** bibit.
   - Tab **Profil Pemilik, WA Toko & Pengiriman**: **Update** dan **Hapus** nama pemilik toko, nomor WhatsApp toko, serta batas minimal/maksimal batang pengantaran.
3. `app.js` — **State & Sinkronisasi Data**: Menyimpan dan menyinkronkan data antara `index.html` dan `admin.html` secara *real-time* melalui `localStorage`.
