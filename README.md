# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File)

Paket kode ini memisahkan tampilan antara **Pembeli** dan **Admin Toko** ke dalam file yang berbeda namun tetap terhubung secara *real-time* menggunakan penyimpanan lokal browser (`localStorage`).

## Struktur File
1. `index.html` — **Halaman Pembeli (Storefront)**: Katalog bibit, filter kategori, keranjang belanja, *checkout* dengan tautan otomatis ke WhatsApp Admin, dan fitur cek status pesanan.
2. `admin.html` — **Halaman Admin Toko (Dashboard)**: Halaman terproteksi login (`admin` / `1234`) untuk mengelola pesanan masuk, memperbarui status pesanan, memotong stok otomatis, mengelola inventaris bibit, serta melihat simulasi pengiriman pesan otomatis dari *WhatsApp API Gateway*.
3. `app.js` — **Logika & Penyimpanan Bersama**: Menyimpan data produk, pesanan, dan log pesan WhatsApp agar perubahan di `index.html` langsung muncul di `admin.html` (dan sebaliknya).

## Cara Menjalankan
1. Ekstrak seluruh file ke dalam satu folder yang sama.
2. Buka `index.html` di browser untuk melihat tampilan pembeli.
3. Buka `admin.html` di tab browser terpisah (atau klik tombol **Admin** di pojok kanan atas `index.html`) untuk mengelola toko.
