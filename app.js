// Data Awal Bibit Tanaman
const DEFAULT_PRODUCTS = [
  {
    id: 'PRD-01',
    name: 'Bibit Durian Musang King Kaki 3',
    category: 'Buah',
    height: '70 - 90 cm (Okulasi)',
    price: 85000,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    desc: 'Unggul cepat berbuah (3-4 tahun), daging tebal kuning keemasan, rasa manis legit.'
  },
  {
    id: 'PRD-02',
    name: 'Bibit Alpukat Aligator Jumbo',
    category: 'Buah',
    height: '60 - 80 cm (Sambung Pucuk)',
    price: 55000,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    desc: 'Ukuran buah bisa mencapai 1 kg lebih, tekstur lembut pulen tanpa serat.'
  },
  {
    id: 'PRD-03',
    name: 'Bibit Mangga Kiojay Thailand',
    category: 'Buah',
    height: '65 - 85 cm (Okulasi)',
    price: 45000,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    desc: 'Cocok ditanam di pot (tabulampot), buah besar manis renyah meski masih mengkal.'
  },
  {
    id: 'PRD-04',
    name: 'Monstera Deliciosa King',
    category: 'Hias',
    height: '40 - 50 cm (4-5 Daun)',
    price: 120000,
    stock: 6,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    desc: 'Tanaman hias indoor populer dengan daun berlubang estetik, perawatan mudah.'
  },
  {
    id: 'PRD-05',
    name: 'Aglaonema Red Anjamani',
    category: 'Hias',
    height: '25 - 35 cm (Rimbun)',
    price: 65000,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
    desc: 'Warna daun merah cerah merona, sangat cantik untuk teras maupun ruang tamu.'
  },
  {
    id: 'PRD-06',
    name: 'Bibit Pohon Pule (Pulai) Taman',
    category: 'Peneduh',
    height: '120 - 150 cm',
    price: 150000,
    stock: 4,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    desc: 'Pohon peneduh bernilai estetika tinggi untuk lanskap taman rumah atau kafe.'
  }
];

const DEFAULT_ORDERS = [
  {
    id: 'BIBIT-101',
    customerName: 'Budi Santoso',
    phone: '6281234567890',
    address: 'Jl. Melati No. 14, Kec. Lowokwaru, Kota Malang',
    courier: 'J&T Cargo',
    resi: 'JNT88291044',
    items: [
      { id: 'PRD-01', name: 'Bibit Durian Musang King Kaki 3', qty: 2, price: 85000 }
    ],
    total: 170000,
    status: 'Dikirim',
    stockDeducted: true,
    createdAt: '27 Nov 2026, 09:15'
  },
  {
    id: 'BIBIT-102',
    customerName: 'Siti Aminah',
    phone: '6285798765432',
    address: 'Perum Griya Asri Blok C-4, Sidoarjo',
    courier: 'Sicepat Gokil',
    resi: '',
    items: [
      { id: 'PRD-04', name: 'Monstera Deliciosa King', qty: 1, price: 120000 },
      { id: 'PRD-05', name: 'Aglaonema Red Anjamani', qty: 2, price: 65000 }
    ],
    total: 250000,
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
    message: 'Kabar baik Kak Budi Santoso! Bibit pesanan #BIBIT-101 sudah dikirim via J&T Cargo dengan nomor resi: JNT88291044. Pastikan bibit segera dibuka dan disiram secukupnya saat tiba ya!'
  }
];

const ADMIN_WA_NUMBER = '6281299998888'; // Nomor WA Toko

// State Management dengan LocalStorage agar tersinkronisasi antar file (index.html & admin.html)
function initStore() {
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
  localStorage.setItem('kn_products', JSON.stringify(DEFAULT_PRODUCTS));
  localStorage.setItem('kn_orders', JSON.stringify(DEFAULT_ORDERS));
  localStorage.setItem('kn_wa_logs', JSON.stringify(DEFAULT_WA_LOGS));
  location.reload();
}

function formatRupiah(num) {
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function normalizePhone(phone) {
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.substring(1);
  }
  return cleaned;
}
