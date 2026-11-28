# Kebun Nusantara - Aplikasi Toko Bibit Tanaman (Multi-File v9)

Paket kode lengkap dengan pengalihan langsung ke **Halaman Login Pembeli (`auth.html`)** sebelum *checkout* serta fitur **Upload Gambar Manual** pada form **Tambah** dan **Update** stok bibit di halaman admin.

## Daftar File
1. `index.html` — **Halaman Pembeli**:
   - Mengarahkan pembeli yang belum login langsung ke `auth.html?next=checkout` (halaman login pembeli) sebelum *checkout*, lalu otomatis membuka kembali keranjang belanja setelah login berhasil.
   - Menampilkan tombol **Lihat Yang Sudah Dipesan** untuk melihat rincian produk, status pesanan, dan nomor surat jalan/resi akun pembeli.
   - Filter kategori otomatis menyesuaikan kategori yang diketik manual oleh admin.
2. `auth.html` — **Halaman Login & Daftar Pembeli**:
   - Membuka tampilan **Login Pembeli** secara langsung (akun demo bawaan: `budi` / `123` dan `siti` / `123`), dengan tab **Daftar Akun Baru** apabila pembeli belum memiliki akun.
3. `admin.html` — **Halaman Admin Toko** (Login: `admin` / `1234`):
   - **Kelola Stok Bibit (Upload Gambar Manual & Kategori Ketik Manual)**: Form tambah dan *update* bibit menyediakan fitur **upload gambar manual** dari perangkat (dengan pratinjau gambar) serta input kategori ketik manual.
   - **Kelola Pesanan Masuk**: Pencarian pesanan sesuai `username` pembeli, filter status, update status transaksi, input resi/surat jalan, serta log notifikasi WhatsApp otomatis (stok bibit tidak berkurang otomatis setelah pembelian).
   - **Laporan Harian, Bulanan & Tahunan**: Rekap transaksi, jumlah kotak terjual, dan omzet per tanggal, bulan, atau tahun beserta ekspor CSV.
   - **Profil Pemilik, WA Toko & Pengiriman**: *Update* dan *Hapus* nama pemilik toko, nomor WhatsApp toko, serta aturan pengantaran (min 40 – max 200 kotak atau ambil di tempat).
4. `app.js` — **State & Sinkronisasi Real-Time**: Menyimpan dan menyinkronkan data antar-halaman (`index.html`, `auth.html`, `admin.html`).
