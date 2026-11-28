# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File v8)

Paket kode lengkap dengan halaman **Login & Daftar Pembeli (`auth.html`)** terpisah sebelum *checkout* serta input **Kategori Manual** oleh admin.

## Daftar File
1. `index.html` — **Halaman Pembeli**:
   - Mengarahkan pembeli ke halaman `auth.html` untuk **Login Username** atau **Daftar Akun Baru** sebelum *checkout*, lalu otomatis membuka kembali keranjang belanja dengan data pengiriman terisi.
   - Menampilkan tombol **Lihat Yang Sudah Dipesan** untuk melihat rincian produk, status pesanan, dan nomor surat jalan/resi akun pembeli.
   - Filter kategori otomatis menyesuaikan kategori apa pun yang diketik manual oleh admin.
2. `auth.html` — **Halaman Login & Daftar Pembeli**:
   - Halaman khusus registrasi akun baru (`username`, `password`, nama, nomor WhatsApp, alamat) dan login pembeli berdasarkan `username` (akun demo bawaan: `budi` / `123` dan `siti` / `123`).
3. `admin.html` — **Halaman Admin Toko** (Login: `admin` / `1234`):
   - **Kelola Stok Bibit (Kategori Ketik Manual)**: Admin mengetikkan nama kategori bibit secara manual pada form tambah maupun *update* bibit, disertai saran kategori yang sudah ada.
   - **Kelola Pesanan Masuk**: Pencarian pesanan sesuai `username` pembeli, filter status, update status transaksi, input resi/surat jalan, serta log notifikasi WhatsApp otomatis (stok bibit tidak berkurang otomatis setelah pembelian).
   - **Laporan Harian, Bulanan & Tahunan**: Rekap jumlah transaksi, kotak terjual, dan omzet per tanggal, bulan, atau tahun beserta ekspor CSV.
   - **Profil Pemilik, WA Toko & Pengiriman**: *Update* dan *Hapus* nama pemilik toko, nomor WhatsApp toko, serta aturan pengantaran (min 40 – max 200 kotak atau ambil di tempat).
4. `app.js` — **State & Sinkronisasi Real-Time**: Menyimpan dan menyinkronkan data antar-halaman (`index.html`, `auth.html`, `admin.html`).
