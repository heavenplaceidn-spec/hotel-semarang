# Naskah prompt — sampai tahap Hotel Semarang

Dokumen ini mencatat urutan permintaan yang membentuk peta, lalu satu prompt gabungan yang menggambarkan **keadaan sekarang**. Bahasa antarmuka: Indonesia. Jangan memakai nama Cascade.

Berkas peta yang dipakai aplikasi: `Hotel-Semarang.html` (salinan sumber yang sama dengan peta di pratinjau). Data vektor yang dipanggil peta:

- `tempat.geojson` — 241 titik (193 hotel, 29 wisata, 13 belanja, 6 transport)
- `jalan-utama.geojson` — 2093 ruas jalan utama
- `kelurahan-ringan.geojson` — 177 batas kelurahan Kota Semarang

Peta studi pesisir (`wilayah-studi.geojson`, 22 kelurahan Utara dan Genuk) dan shapefile kota masih tersimpan, tetapi **tidak digambar** di tahap ini.

---

## Tahap 1 — WebGIS satu berkas

Bangun WebGIS production-ready dalam satu HTML (Leaflet, canvas, empat peta dasar, lapisan, cari, ukur, ekspor, legenda, popup, responsif). Awalnya kajian pesisir Semarang dalam bahasa Inggris, dengan pernyataan bahwa data tematik bukan produk resmi.

## Tahap 2 — Kota Semarang, bahasa Indonesia, basemap seperti Google Maps

Pakai GeoJSON Kota Semarang yang dilampirkan. Ubah seluruh UI ke bahasa Indonesia. Pindahkan pemilih peta dasar ke bawah kanan, model kartu Google Maps (tertutup, hanya kartu aktif plus chevron; terbuka: Terang, Jalan, Satelit, Topografi). Fokus penelitian saat itu: penurunan tanah, rob, dan alih fungsi lahan di Semarang Utara dan Genuk. Judul cukup nama penelitian, bukan merek lucu. Kelas tematik adalah tafsiran pola lapangan, bukan InSAR, catatan pasang, atau RDTR.

## Tahap 3 — Lebih interaktif, buang vektor yang salah

Buang sketsa sungai dan vektor yang tidak masuk akal. Pasangkan batas kota sebagai SHP dan GeoJSON. Kecamatan pada berkas asli tidak dipercaya: identitas kelurahan dari nama ditambah letak, dicocokkan ke 16 kecamatan / 177 kelurahan. Serpihan dan desa di luar kota dibuang. Titik pantau hanya ilustrasi di dalam poligon, dengan nama singkat. Saat fitur diklik, sediakan buka di Google Maps. Tombol alat menampilkan nama singkat, bukan ikon semata. Pencarian menoleransi salah ketik dan langsung meloncat ke tempat yang paling mirip.

## Tahap 4 — Tata letak fleksibel

Rapikan di laptop, PC, HP, dan layar pendek. Peta tidak boleh tertutup banyak panel sekaligus. Panel mulai tertutup (tab kecil). Legenda mulai terlipat. HP memakai tab bawah. Di monitor lebar, kartu judul boleh memuat satu kalimat penjelasan.

## Tahap 5 — Peta yang lebih lega

Deretan alat jangan membentang di atas peta. Satu tombol **Alat** membuka kisi nama singkat: Dekat, Jauh, Lokasi, Kota, Penuh, Jarak, Luas. Menu ditutup lagi setelah dipakai. Panel daftar tidak otomatis terbuka, termasuk di layar lebar.

## Tahap 6 — Keadaan sekarang: Hotel Semarang

Peta bergeser dari kajian pesisir menjadi peta kota untuk menginap dan berkeliling.

**Judul:** Hotel Semarang.  
**Kalimat:** Penginapan dan tempat menarik di seluruh Kota Semarang, bukan hanya Semarang Utara dan Genuk.

**Yang tampil**

- Pencarian di kiri atas: “Cari hotel, mal, atau tempat…”, plus tombol lokasi. Salah ketik tetap diarahkan ke nama terdekat.
- Keping saringan: Semua, Hotel, Wisata, Belanja, Transport.
- Panel **Daftar** (tertutup sampai dibuka): kelas bintang 1–5, kecamatan, jumlah, daftar tempat. Catatan: bukan harga langsung.
- Legenda terlipat: Hotel, Wisata, Belanja, Transport, jalan utama, batas kelurahan.
- Kartu tempat: jenis, bintang bila ada (“kelas dinas”), kisaran harga, jam plus lencana Buka/Tutup zona Asia/Jakarta, fasilitas, jarak, alamat, deskripsi yang bisa diperpanjang, tempat sejenis dalam 1,4 km, telepon.
- Tombol **Rute di Peta** dan **G-Maps**. Rute mengemudi memakai jaringan jalan terbuka. Jika lokasi ditolak, titik awalnya Simpang Lima. Jika rute gagal, tampil garis putus-putus jarak lurus, dan itu dikatakan terus terang.
- Jarak “dari Anda” hanya setelah lokasi diizinkan; selain itu jarak lurus, bukan klaim waktu tempuh.
- Peta dasar tetap di dok bawah kanan. Skala metrik. Koordinat bisa disalin.
- Saat diperbesar (zoom 15+), tiap tempat berupa titik. Saat dijauhkan, titik yang rapat menjadi angka kelompok; ketukan kelompok memperbesar.
- HP: tab Daftar, Peta, Legenda. Kartu tempat tidak bertabrakan dengan dok peta dasar.
- Tentang data menjelaskan batas klaim: bintang hanya jika nama cocok dengan direktori hotel Dinas Kota Semarang; tarif kisaran; ulasan Google tidak disalin; jalan kampung ada di peta dasar Jalan, bukan di lapisan vektor, supaya berkas tetap ringan.

**Angka data yang harus jujur**

- 193 hotel. Yang punya kelas bintang: 9 bintang 5, 13 bintang 4, 20 bintang 3, 17 bintang 2, 15 bintang 1. Sisanya (119 hotel) tidak diberi bintang karena tidak cocok ke direktori.
- 29 wisata, 13 belanja, 6 transport.
- Semua titik berada di dalam kotak Kota Semarang.
- 177 kelurahan, 2093 ruas jalan utama.

---

## Prompt gabungan — tempel ini untuk melanjutkan

Salin blok di bawah ini jika percakapan baru harus meneruskan peta tanpa mengulang dari nol.

```text
Lanjutkan peta yang sudah ada, jangan buat aplikasi baru dan jangan ganti namanya.

Nama: Hotel Semarang.
Kalimat: Penginapan dan tempat menarik di seluruh Kota Semarang.
Bahasa antarmuka: Indonesia. Jangan memakai nama Cascade.

Peta Leaflet, preferCanvas, satu halaman. Peta dasar di dok bawah kanan, model kartu: Terang, Jalan, Satelit, Topografi. Dok mulai tertutup.

Data yang dipakai:
- tempat.geojson: hotel, wisata, belanja, transport. Kelas bintang hanya jika nama cocok ke direktori hotel Dinas Kota Semarang. Harga adalah kisaran, bukan tarif hari ini. Jangan menyalin ulasan Google.
- jalan-utama.geojson: tol, arteri, kolektor. Jalan kampung tetap di peta dasar Jalan.
- kelurahan-ringan.geojson: 177 kelurahan. Jangan percaya kolom kecamatan pada shapefile mentah; identitas mengikuti nama dan letak.

Interaksi yang wajib tetap ada:
- Cari dengan toleransi salah ketik, langsung loncat ke tempat paling mirip.
- Saringan Semua / Hotel / Wisata / Belanja / Transport, plus bintang dan kecamatan di daftar.
- Kartu tempat: bintang bila ada, harga, jam dengan status Buka/Tutup (Asia/Jakarta), fasilitas, alamat, telepon, tempat sejenis di dekatnya.
- G-Maps membuka koordinat yang sama.
- Rute di peta dari lokasi pengguna. Jika lokasi ditolak, mulai dari Simpang Lima. Jika layanan rute gagal, garis lurus dan beri tahu pengguna.
- Alat tersembunyi di tombol "Alat": Dekat, Jauh, Lokasi, Kota, Penuh, Jarak, Luas. Nama singkat, bukan ikon semata.
- Panel daftar dan legenda mulai tertutup. HP memakai tab bawah. Peta tidak ditutupi banyak panel.
- Saat zoom menjauh, titik rapat dikelompokkan jadi angka.

Jangan mengklaim data resmi, harga langsung, atau rute yang selalu tersedia.
Jangan mengembalikan lapisan rob, amblesan, atau alih fungsi kecuali diminta terpisah. Berkas studi pesisir boleh tetap tersimpan, tetapi jangan digambar di peta hotel.
```

---

## Batas yang sengaja tidak diklaim

- Bukan mesin pemesanan kamar dan bukan harga live.
- Bukan salinan ulasan atau foto Google.
- Rute bergantung pada layanan jaringan jalan publik; garis lurus adalah cadangan, bukan navigasi belokan demi belokan.
- Lapisan kajian pesisir tidak hilang dari penyimpanan, tetapi bukan isi peta tahap ini.
