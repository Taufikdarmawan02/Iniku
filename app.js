// Konfigurasi Awal Pengaturan Toko
const DEFAULT_SETTINGS = {
  storeName: 'Kebun Nusantara',
  ownerName: 'H. Ahmad Subagyo',
  storeWa: '6281299998888',
  minDeliveryQty: 4000,
  maxDeliveryQty: 20000
};

// Data Awal Bibit Tanaman (Stok menyesuaikan skala partai/grosir & eceran)
const DEFAULT_PRODUCTS = [
  {
    id: 'PRD-01',
    name: 'Bibit Durian Musang King Kaki 3',
    category: 'Buah',
    height: '70 - 90 cm (Okulasi)',
    price: 35000,
    stock: 8500,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    desc: 'Unggul cepat berbuah (3-4 tahun), daging tebal kuning keemasan, siap suplai proyek kebun.'
  },
  {
    id: 'PRD-02',
    name: 'Bibit Alpukat Aligator Jumbo',
    category: 'Buah',
    height: '60 - 80 cm (Sambung Pucuk)',
    price: 25000,
    stock: 12000,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    desc: 'Ukuran buah bisa mencapai 1 kg lebih, tekstur lembut pulen tanpa serat.'
  },
  {
    id: 'PRD-03',
    name: 'Bibit Mangga Kiojay Thailand',
    category: 'Buah',
    height: '65 - 85 cm (Okulasi)',
    price: 22000,
    stock: 6500,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    desc: 'Cocok untuk perkebunan maupun tabulampot, buah besar manis renyah.'
  },
  {
    id: 'PRD-04',
    name: 'Monstera Deliciosa King',
    category: 'Hias',
    height: '40 - 50 cm (4-5 Daun)',
    price: 65000,
    stock: 1200,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    desc: 'Tanaman hias indoor populer dengan daun berlubang estetik, perawatan mudah.'
  },
  {
    id: 'PRD-05',
    name: 'Aglaonema Red Anjamani',
    category: 'Hias',
    height: '25 - 35 cm (Rimbun)',
    price: 35000,
    stock: 3000,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
    desc: 'Warna daun merah cerah merona, sangat cantik untuk lanskap taman maupun teras.'
  },
  {
    id: 'PRD-06',
    name: 'Bibit Pohon Pule / Penghijauan',
    category: 'Peneduh',
    height: '120 - 150 cm',
    price: 45000,
    stock: 9000,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    desc: 'Pohon peneduh untuk proyek penghijauan kawasan, jalan raya, atau taman.'
  }
];

const DEFAULT_ORDERS = [
  {
    id: 'BIBIT-101',
    customerName: 'Budi Santoso (PT Agro Makmur)',
    phone: '6281234567890',
    address: 'Jl. Melati No. 14, Kec. Lowokwaru, Kota Malang',
    deliveryMethod: 'Diantar Armada Toko',
    courier: 'Truk Engkel / Fuso Kebun',
    resi: 'ARMADA-01',
    items: [
      { id: 'PRD-01', name: 'Bibit Durian Musang King Kaki 3', qty: 4500, price: 35000 }
    ],
    totalQty: 4500,
    total: 157500000,
    status: 'Dikirim',
    stockDeducted: true,
    createdAt: '27 Nov 2026, 09:15'
  },
  {
    id: 'BIBIT-102',
    customerName: 'Siti Aminah',
    phone: '6285798765432',
    address: 'Ambil Langsung di Kebun Utama',
    deliveryMethod: 'Ambil di Tempat',
    courier: 'Ambil di Tempat',
    resi: '',
    items: [
      { id: 'PRD-04', name: 'Monstera Deliciosa King', qty: 50, price: 65000 }
    ],
    totalQty: 50,
    total: 3250000,
    status: 'Menunggu Pembayaran',
    stockDeducted: false,
    createdAt: '27 Nov 2026, 14:30'
  }
];

const DEFAULT_WA_LOGS = [
  {
    time: '09:40',
    orderId: 'BIBIT-101',
    to: '6281234567890 (Budi Santoso)',
    status: 'Dikirim',
    message: 'Kabar baik Kak Budi Santoso! Bibit pesanan #BIBIT-101 (4.500 batang) sedang dalam perjalanan via Diantar Armada Toko (No. Jalan: ARMADA-01). Pastikan tim lapangan siap saat armada tiba!'
  }
];

function initStore() {
  if (!localStorage.getItem('kn_settings')) {
    localStorage.setItem('kn_settings', JSON.stringify(DEFAULT_SETTINGS));
  }
  if (!localStorage.getItem('kn_products')) {
    localStorage.setItem('kn_products', JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem('kn_orders')) {
    localStorage.setItem('kn_orders', JSON.stringify(DEFAULT_ORDERS));
  }
  if (!localStorage.getItem('kn_wa_logs')) {
    localStorage.setItem('kn_wa_logs', JSON.stringify(DEFAULT_WA_LOGS));
  }
}

function getSettings() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_settings'));
}

function saveSettings(settings) {
  localStorage.setItem('kn_settings', JSON.stringify(settings));
}

function getProducts() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_products'));
}

function saveProducts(products) {
  localStorage.setItem('kn_products', JSON.stringify(products));
}

function getOrders() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_orders'));
}

function saveOrders(orders) {
  localStorage.setItem('kn_orders', JSON.stringify(orders));
}

function getWaLogs() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_wa_logs'));
}

function saveWaLogs(logs) {
  localStorage.setItem('kn_wa_logs', JSON.stringify(logs));
}

function resetDemoData() {
  if (!confirm('Reset semua data ke pengaturan awal demo?')) return;
  localStorage.setItem('kn_settings', JSON.stringify(DEFAULT_SETTINGS));
  localStorage.setItem('kn_products', JSON.stringify(DEFAULT_PRODUCTS));
  localStorage.setItem('kn_orders', JSON.stringify(DEFAULT_ORDERS));
  localStorage.setItem('kn_wa_logs', JSON.stringify(DEFAULT_WA_LOGS));
  location.reload();
}

function formatRupiah(num) {
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function formatNumber(num) {
  return Number(num).toLocaleString('id-ID');
}

function normalizePhone(phone) {
  let cleaned = String(phone).replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.substring(1);
  }
  return cleaned;
}
