// Konfigurasi Awal Pengaturan Toko
const DEFAULT_SETTINGS = {
  storeName: 'Kebun Nusantara',
  ownerName: 'H. Ahmad Subagyo',
  storeWa: '6281299998888',
  minDeliveryQty: 40,
  maxDeliveryQty: 200
};

// Data Awal Bibit Tanaman (Satuan Kotak)
const DEFAULT_PRODUCTS = [
  {
    id: 'PRD-01',
    name: 'Bibit Durian Musang King Kaki 3',
    category: 'Buah',
    height: '70 - 90 cm (Okulasi)',
    price: 350000,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    desc: 'Unggul cepat berbuah (3-4 tahun), daging tebal kuning keemasan, siap suplai kebun.'
  },
  {
    id: 'PRD-02',
    name: 'Bibit Alpukat Aligator Jumbo',
    category: 'Buah',
    height: '60 - 80 cm (Sambung Pucuk)',
    price: 250000,
    stock: 220,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    desc: 'Ukuran buah bisa mencapai 1 kg lebih, tekstur lembut pulen tanpa serat.'
  },
  {
    id: 'PRD-03',
    name: 'Bibit Mangga Kiojay Thailand',
    category: 'Buah',
    height: '65 - 85 cm (Okulasi)',
    price: 220000,
    stock: 95,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    desc: 'Cocok untuk perkebunan maupun tabulampot, buah besar manis renyah.'
  },
  {
    id: 'PRD-04',
    name: 'Monstera Deliciosa King',
    category: 'Hias',
    height: '40 - 50 cm (4-5 Daun)',
    price: 450000,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    desc: 'Tanaman hias indoor populer dengan daun berlubang estetik, perawatan mudah.'
  },
  {
    id: 'PRD-05',
    name: 'Aglaonema Red Anjamani',
    category: 'Hias',
    height: '25 - 35 cm (Rimbun)',
    price: 300000,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
    desc: 'Warna daun merah cerah merona, sangat cantik untuk lanskap taman maupun teras.'
  },
  {
    id: 'PRD-06',
    name: 'Bibit Pohon Pule / Penghijauan',
    category: 'Peneduh',
    height: '120 - 150 cm',
    price: 400000,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    desc: 'Pohon peneduh untuk proyek penghijauan kawasan, jalan raya, atau taman.'
  }
];


const DEFAULT_BUYERS = [
  {
    username: 'budi',
    password: '123',
    fullName: 'Budi Santoso (PT Agro Makmur)',
    phone: '6281234567890',
    address: 'Jl. Melati No. 14, Kec. Lowokwaru, Kota Malang'
  }
];

const DEFAULT_BUYERS_EXTRA = [
  {
    username: 'budi',
    password: '123',
    fullName: 'Budi Santoso (PT Agro Makmur)',
    phone: '6281234567890',
    address: 'Jl. Melati No. 14, Kec. Lowokwaru, Kota Malang'
  },
  {
    username: 'siti',
    password: '123',
    fullName: 'Siti Aminah',
    phone: '6285798765432',
    address: 'Jl. Mawar No. 8, Sidoarjo'
  }
];

function getTodayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const DEFAULT_ORDERS = [
  {
    id: 'BIBIT-101',
    buyerUsername: 'budi',
    customerName: 'Budi Santoso (PT Agro Makmur)',
    phone: '6281234567890',
    address: 'Jl. Melati No. 14, Kec. Lowokwaru, Kota Malang',
    deliveryMethod: 'Diantar Armada Toko',
    courier: 'Armada Toko',
    resi: 'ARMADA-01',
    items: [
      { id: 'PRD-01', name: 'Bibit Durian Musang King Kaki 3', qty: 50, price: 350000 }
    ],
    totalQty: 50,
    total: 17500000,
    status: 'Dikirim',
    stockDeducted: false,
    orderDate: getTodayISO(),
    createdAt: 'Hari ini, 09:15'
  },
  {
    id: 'BIBIT-102',
    buyerUsername: 'siti',
    customerName: 'Siti Aminah',
    phone: '6285798765432',
    address: 'Ambil Langsung di Kebun Toko',
    deliveryMethod: 'Ambil di Tempat',
    courier: 'Ambil di Tempat',
    resi: '',
    items: [
      { id: 'PRD-04', name: 'Monstera Deliciosa King', qty: 5, price: 450000 }
    ],
    totalQty: 5,
    total: 2250000,
    status: 'Menunggu Pembayaran',
    stockDeducted: false,
    orderDate: getTodayISO(),
    createdAt: 'Hari ini, 14:30'
  }
];

const DEFAULT_WA_LOGS = [
  {
    time: '09:40',
    orderId: 'BIBIT-101',
    to: '6281234567890 (Budi Santoso)',
    status: 'Dikirim',
    message: 'Kabar baik Kak Budi Santoso! Bibit pesanan #BIBIT-101 (50 kotak) sedang dalam perjalanan via Diantar Armada Toko (No. Surat Jalan: ARMADA-01). Pastikan tim siap saat armada tiba!'
  }
];

function initStore() {
  if (!localStorage.getItem('kn_settings_v6')) {
    localStorage.setItem('kn_settings_v6', JSON.stringify(DEFAULT_SETTINGS));
  }
  if (!localStorage.getItem('kn_buyers_v6')) {
    localStorage.setItem('kn_buyers_v6', JSON.stringify(DEFAULT_BUYERS_EXTRA));
  }
  if (!localStorage.getItem('kn_products_v6')) {
    localStorage.setItem('kn_products_v6', JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem('kn_orders_v6')) {
    localStorage.setItem('kn_orders_v6', JSON.stringify(DEFAULT_ORDERS));
  }
  if (!localStorage.getItem('kn_wa_logs_v6')) {
    localStorage.setItem('kn_wa_logs_v6', JSON.stringify(DEFAULT_WA_LOGS));
  }
}

function getSettings() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_settings_v6'));
}

function saveSettings(settings) {
  localStorage.setItem('kn_settings_v6', JSON.stringify(settings));
}

function getProducts() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_products_v6'));
}

function saveProducts(products) {
  localStorage.setItem('kn_products_v6', JSON.stringify(products));
}

function getOrders() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_orders_v6'));
}

function saveOrders(orders) {
  localStorage.setItem('kn_orders_v6', JSON.stringify(orders));
}

function getWaLogs() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_wa_logs_v6'));
}

function saveWaLogs(logs) {
  localStorage.setItem('kn_wa_logs_v6', JSON.stringify(logs));
}

function resetDemoData() {
  if (!confirm('Reset semua data ke pengaturan awal demo?')) return;
  localStorage.setItem('kn_settings_v6', JSON.stringify(DEFAULT_SETTINGS));
  localStorage.setItem('kn_products_v6', JSON.stringify(DEFAULT_PRODUCTS));
  localStorage.setItem('kn_orders_v6', JSON.stringify(DEFAULT_ORDERS));
  localStorage.setItem('kn_wa_logs_v6', JSON.stringify(DEFAULT_WA_LOGS));
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


function getBuyers() {
  initStore();
  return JSON.parse(localStorage.getItem('kn_buyers_v6'));
}

function saveBuyers(buyers) {
  localStorage.setItem('kn_buyers_v6', JSON.stringify(buyers));
}

function getCurrentBuyer() {
  const raw = sessionStorage.getItem('kn_current_buyer');
  return raw ? JSON.parse(raw) : null;
}

function setCurrentBuyer(buyer) {
  if (buyer) {
    sessionStorage.setItem('kn_current_buyer', JSON.stringify(buyer));
  } else {
    sessionStorage.removeItem('kn_current_buyer');
  }
}
