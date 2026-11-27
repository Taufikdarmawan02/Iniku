# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File v3)

Paket kode ini mencakup pembaruan pengelolaan **Nama Pemilik & WhatsApp Toko**, aturan **Pengiriman Diantar (Min 40 kotak - Max 200 kotak) / Ambil di Tempat**, serta aksi **Update & Hapus** pada stok bibit dengan antarmuka standar yang ringkas.

## Daftar File
1. `index.html` — **Halaman Pembeli**: Menampilkan nama pemilik & nomor WhatsApp toko secara dinamis, katalog produk standar dengan tombol `+ Keranjang`, kontrol jumlah `-` / `+` standar di keranjang, dan validasi metode **Diantar Armada Toko (min 40 – max 200 kotak)** atau **Ambil di Tempat**.
2. `admin.html` — **Halaman Admin Toko** (Login: `admin` / `1234`):
   - Tab **Kelola Pesanan Masuk**: Verifikasi pembayaran, input surat jalan/resi, pemotongan stok otomatis, dan log notifikasi WhatsApp otomatis.
   - Tab **Kelola Stok Bibit**: Tambah bibit baru, **Update** harga/stok/detail bibit (satuan kotak), dan **Hapus** bibit.
   - Tab **Profil Pemilik, WA Toko & Pengiriman**: **Update** dan **Hapus** nama pemilik toko, nomor WhatsApp toko, serta batas minimal/maksimal kotak pengantaran.
3. `app.js` — **State & Sinkronisasi Data**: Menyimpan dan menyinkronkan data antara `index.html` dan `admin.html` secara *real-time* melalui `localStorage`.
