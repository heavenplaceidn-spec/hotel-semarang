# MASTER PROMPT — PRODUCTION-READY WEBGIS

## ROLE

Bertindak sebagai **Senior GIS Developer, Senior Frontend Engineer, Spatial UI/UX Engineer, Cartographer, dan WebGIS Performance Engineer**.

Saya ingin Anda **langsung mengeksekusi dan menghasilkan kode lengkap**, bukan sekadar memberikan contoh atau pseudocode.

Bangun sebuah aplikasi **WebGIS interaktif production-ready dalam satu file `index.html`** yang ringan, responsif, modular, mudah dikembangkan, dan memiliki standar UI/UX seperti aplikasi WebGIS profesional.

Jangan memberikan kode yang terpotong.

**Jangan menggunakan `// TODO`, placeholder, pseudo-code, atau bagian seperti "lanjutkan sendiri".**

Seluruh HTML, CSS, JavaScript, konfigurasi Leaflet, mock GeoJSON, styling, popup, kontrol, responsive layout, dan seluruh fungsi harus berada dalam satu file HTML.

---

# 1. IDENTITAS APLIKASI

## Nama aplikasi

**Semarang Coastal Dynamics & Subsidence Watch**

### Subjudul

**WebGIS Monitoring Dinamika Pesisir, Penurunan Tanah, Banjir Rob, dan Tata Ruang Kota Semarang**

### Singkatan internal

**SCDSW**

Jangan gunakan nama "Cascade" atau istilah Cascade apa pun dalam project.

---

# 2. KONSEP SPASIAL

Lokasi kajian:

**Kota Semarang, Jawa Tengah**

Fokus utama:

- Semarang Utara
- Genuk
- Semarang Barat
- kawasan pesisir Kota Semarang
- kawasan Pantura
- area yang berkaitan dengan banjir rob
- dinamika garis pantai
- indikasi penurunan tanah/subsidence
- penggunaan lahan
- infrastruktur pesisir
- jaringan drainase
- sungai
- kawasan permukiman
- kawasan industri
- evaluasi tata ruang

WebGIS harus terasa seperti **sistem monitoring spasial**, bukan sekadar peta dengan beberapa marker.

Semua data, simbol, layer, popup, legenda, dan fitur harus memiliki hubungan dengan tema:

> **Coastal Dynamics + Subsidence + Rob + Land Use + Spatial Planning**

Hapus layer atau fitur yang tidak mempunyai relevansi terhadap tema tersebut.

---

# 3. TUJUAN APLIKASI

WebGIS harus dapat digunakan oleh:

### Primary users
- mahasiswa Geografi
- peneliti
- akademisi
- GIS analyst
- planner/perencana wilayah
- masyarakat yang ingin memahami kondisi pesisir

### Secondary users
- pemerintah daerah
- instansi kebencanaan
- instansi tata ruang
- environmental analyst

Tujuan utama aplikasi:

1. memahami kondisi spasial pesisir Semarang;
2. melihat distribusi zona kerentanan;
3. melihat titik monitoring;
4. memahami jaringan sungai/drainase;
5. melihat perubahan/dinamika garis pantai;
6. melihat penggunaan lahan;
7. melihat hubungan antara subsidence, rob, dan penggunaan lahan;
8. menyediakan informasi spasial yang mudah dipahami;
9. menyediakan data yang dapat diekspor;
10. menjadi fondasi pengembangan WebGIS penelitian yang lebih serius.

---

# 4. TEKNOLOGI

Gunakan:

- HTML5
- CSS3
- JavaScript ES6+
- Leaflet.js
- GeoJSON
- Font Awesome atau icon library ringan jika diperlukan
- Google Fonts — Inter

Jangan menggunakan framework frontend berat seperti:

- React
- Vue
- Angular
- Next.js

Tujuannya adalah menjaga aplikasi:

**lightweight + fast loading + portable + mudah dipelihara.**

---

# 5. BASEMAP

Gunakan Leaflet TileLayer.

Sediakan beberapa pilihan basemap:

### 1. Esri Light Gray Canvas
Default.

Fungsi:

> analytical / clean map

### 2. OpenStreetMap Standard

Fungsi:

> general reference

### 3. Esri World Imagery

Fungsi:

> satellite interpretation

### 4. OpenTopoMap

Fungsi:

> terrain / elevation context

Basemap harus dapat diganti tanpa reload halaman.

Gunakan:

```javascript
L.control.layers(...)
```

atau implementasi custom basemap switcher yang lebih modern.

Jangan menggunakan API key.

Pastikan attribution tetap ditampilkan sesuai ketentuan masing-masing tile provider.

---

# 6. ARSITEKTUR LAYER

Jangan membuat semua data berada dalam satu layer besar.

Gunakan struktur layer yang profesional.

Contoh:

```text
BASEMAPS
│
├── Light Gray
├── OpenStreetMap
├── Satellite
└── Topographic

OPERATIONAL LAYERS
│
├── Administrative Boundary
├── Coastal Area
├── Flood / Rob Risk
├── Subsidence
└── Monitoring Stations

PHYSICAL ENVIRONMENT
│
├── Coastline
├── Rivers
├── Drainage
└── Coastal Infrastructure

LAND USE
│
├── Settlement
├── Industrial Area
├── Agriculture / Open Space
└── Water Bodies

MONITORING
│
├── Subsidence Monitoring
├── Tide / Water Level
├── Flood Observation
└── Coastal Observation

PLANNING
│
├── Coastal Management Zone
├── Vulnerability Zone
└── Spatial Planning Interpretation
```

Gunakan `L.layerGroup()` atau `L.featureGroup()` sehingga masing-masing kategori dapat:

- diaktifkan;
- dinonaktifkan;
- dibuka;
- ditutup;
- digabungkan kembali.

---

# 7. DATA FORMAT

Gunakan **GeoJSON sebagai format data utama**.

Jangan membuat polygon sembarangan berbentuk kotak hanya untuk memenuhi tampilan.

Semua data spasial harus direpresentasikan sebagai:

```javascript
{
    "type": "FeatureCollection",
    "features": [...]
}
```

Setiap feature harus memiliki:

```javascript
{
    "type": "Feature",
    "properties": {},
    "geometry": {}
}
```

Gunakan geometry yang sesuai:

- Point
- MultiPoint
- LineString
- MultiLineString
- Polygon
- MultiPolygon

---

# 8. MOCK DATA

Buat mock data realistis untuk Kota Semarang.

**Penting:**

Mock data boleh digunakan untuk demonstrasi UI, tetapi jangan mengklaim bahwa angka tersebut merupakan hasil pengukuran resmi.

Berikan metadata:

```text
Data status: Demonstration / Mock Data
```

Gunakan data yang secara geografis masuk akal.

### DATA POINT

Buat beberapa titik monitoring:

- Stasiun Monitoring Subsidence
- Stasiun Pengamatan Rob
- Stasiun Tinggi Muka Air
- Titik Observasi Garis Pantai
- Titik Infrastruktur Pesisir

Contoh atribut:

```text
id
name
type
location
elevation
status
observation
last_update
description
```

---

# 9. DATA LINE

Buat layer garis yang relevan:

### Coastline

Representasikan garis pantai.

### River Network

Contoh:

- Sungai Banjir Kanal Barat
- Sungai Banjir Kanal Timur
- Sungai Tenggang
- Sungai Sringin
- jaringan sungai lainnya yang relevan

### Drainage Network

Buat beberapa jaringan drainase utama sebagai mock data.

### Coastal Infrastructure

Representasikan secara LineString:

- tanggul
- coastal protection
- seawall
- saluran utama
- jalur infrastruktur pesisir

---

# 10. DATA POLYGON

Polygon harus **berbentuk geografis yang masuk akal**, bukan persegi panjang generik.

Gunakan geometry yang mengikuti bentuk wilayah.

Sediakan:

### Administrative Boundary

Minimal:

- Kota Semarang
- Semarang Utara
- Genuk
- Semarang Barat

Jika memungkinkan tambahkan kecamatan pesisir lain yang relevan.

### Rob Vulnerability Zone

Kategori:

- Low
- Moderate
- High
- Very High

### Subsidence Zone

Kategori:

- Low
- Moderate
- High

### Land Use

Minimal:

- Settlement
- Industrial
- Agriculture/Open Space
- Coastal/Wetland
- Water Body

### Coastal Management Zone

Zona interpretasi untuk pengelolaan pesisir.

---

# 11. SISTEM SIMBOLOGI

Gunakan desain kartografi yang konsisten.

### Ocean / Coastal Accent

```text
#0077B6
```

### Vulnerability / Rob

```text
#E11D48
```

### Subsidence

Gunakan gradasi:

```text
Low
Moderate
High
Very High
```

dengan warna yang secara visual mudah dibedakan.

### Administrative Boundary

Slate:

```text
#0F172A
```

gunakan:

```text
dashArray
```

agar batas administrasi tidak terlalu dominan.

### Monitoring Station

Gunakan:

```javascript
L.circleMarker()
```

Jangan menggunakan marker PNG Leaflet default.

Marker harus:

- ringan;
- modern;
- mudah dibedakan;
- memiliki hover effect;
- memiliki popup.

---

# 12. UI / UX

Gunakan prinsip:

> **Map First, Information Second**

Peta harus menjadi elemen visual utama.

Jangan memenuhi layar dengan panel.

Gunakan:

- glassmorphism
- rounded corners
- subtle shadow
- backdrop blur
- whitespace
- typography hierarchy

CSS utama:

```css
backdrop-filter: blur(12px);
background: rgba(255,255,255,.88);
```

Gunakan font:

```text
Inter
```

---

# 13. DESKTOP LARGE

Untuk layar desktop besar:

```text
┌─────────────────────────────────────────────┐
│ Logo / Title                     Controls   │
│                                             │
│                                             │
│                  MAP                        │
│                                             │
│                                             │
│ Toolbar                           Legend    │
│                                             │
│ Cursor / Zoom / Scale                       │
└─────────────────────────────────────────────┘
```

Jangan membuat panel terlalu besar.

---

# 14. DESKTOP SMALL / LAPTOP

Pastikan aplikasi tetap nyaman pada:

- 1366 × 768
- 1280 × 720
- 1024 × 768

Panel harus otomatis mengecil.

Jangan sampai:

- popup tertutup panel;
- legenda menutup kontrol;
- layer panel menutupi attribution;
- toolbar bertabrakan;
- map kehilangan area visual.

Gunakan CSS media query.

---

# 15. MOBILE

Pada smartphone, jangan sekadar mengecilkan desktop UI.

Gunakan **mobile-specific layout**.

Panel kontrol berubah menjadi:

### Bottom Sheet

Contoh:

```text
┌─────────────────────┐
│                     │
│       MAP           │
│                     │
│                     │
│                     │
├─────────────────────┤
│ Search              │
│ Layers              │
│ Legend              │
│ Export              │
└─────────────────────┘
```

Gunakan:

- collapsible bottom sheet;
- horizontal scrolling jika diperlukan;
- tombol touch-friendly;
- minimum touch target sekitar 44px;
- jangan menumpuk kontrol.

---

# 16. FLOATING TOOLBAR

Di kiri atas.

Minimal:

### Locate Me

Gunakan:

```javascript
map.locate()
```

Tampilkan lokasi pengguna jika permission diberikan.

### Reset View

Mengembalikan peta ke extent kajian Kota Semarang.

### Fullscreen

Tambahkan kontrol fullscreen jika memungkinkan tanpa plugin berat.

---

# 17. SEARCH

Tambahkan search box modern.

Search harus dapat mencari:

- nama lokasi;
- nama kecamatan;
- nama monitoring station;
- nama sungai;
- atribut GeoJSON.

Contoh:

```text
Search location, station, river...
```

Hasil pencarian:

```text
Monitoring Station A
Semarang Utara
Sungai Tenggang
Zona Rob Tinggi
```

Ketika hasil diklik:

- map melakukan `flyTo()`;
- feature dibuka;
- popup ditampilkan.

---

# 18. LAYER MANAGER

Jangan membuat daftar layer yang terlalu panjang secara langsung.

Gunakan kategori collapsible:

```text
LAYERS

Operational
▾
☑ Administrative Boundary
☑ Rob Vulnerability
☑ Subsidence

Physical Environment
▾
☑ Coastline
☑ Rivers
☐ Drainage
☐ Coastal Infrastructure

Land Use
▾
☐ Settlement
☐ Industrial
☐ Open Space
☐ Water

Monitoring
▾
☑ Subsidence Stations
☑ Rob Observation
☐ Tide Stations
```

Setiap kategori dapat dibuka/tutup.

Tambahkan:

### Toggle All

untuk mengaktifkan/nonaktifkan layer dalam kategori.

---

# 19. LEGEND

Legend berada di kanan bawah pada desktop.

Legend harus **context-aware**.

Jangan selalu menampilkan semua legenda.

Jika layer tertentu aktif, legenda layer tersebut dapat muncul.

Contoh:

```text
LEGEND

ROB VULNERABILITY

● Low
● Moderate
● High
● Very High

SUBSIDENCE

━━ Low
━━ Moderate
━━ High

MONITORING

● Subsidence Station
● Rob Observation
```

Legend dapat collapse.

---

# 20. POPUP

Jangan menggunakan popup Leaflet default yang terlihat kaku.

Buat popup custom.

Contoh:

```text
SUBSIDENCE MONITORING STATION

Station ID
SMG-001

Location
Semarang Utara

Status
Active

Observation
High Subsidence

Last Update
2026

[ Zoom to feature ]
```

Gunakan semantic HTML dan CSS.

Jika atribut berupa angka, format angka dengan benar.

---

# 21. FEATURE INTERACTION

Tambahkan:

### Hover

Feature polygon berubah sedikit opacity/border ketika cursor berada di atasnya.

### Click

Membuka popup.

### Highlight

Feature yang dipilih diberi highlight.

### Fly To

Peta bergerak menuju feature.

### Reset Highlight

Saat feature lain dipilih, feature sebelumnya kembali ke style normal.

---

# 22. SPATIAL INFORMATION PANEL

Tambahkan panel informasi ringan yang muncul ketika feature dipilih.

Panel ini tidak harus selalu terlihat.

Isi:

- Feature name
- Type
- Category
- Coordinates
- Status
- Description

Tujuannya agar user tidak hanya melihat marker tetapi memahami konteks spasial.

---

# 23. COORDINATE DISPLAY

Buat indicator bar di kiri bawah.

Tampilkan:

```text
Lat: -6.9xxx
Lng: 110.4xxx
Zoom: 13
```

Update secara realtime berdasarkan posisi cursor.

Pada mobile, sederhanakan agar tidak memenuhi layar.

---

# 24. SCALE BAR

Tambahkan:

```javascript
L.control.scale()
```

Letakkan dengan layout yang tidak bertabrakan dengan:

- attribution;
- coordinate indicator;
- legend.

---

# 25. DATA EXPORT

Tambahkan Export Manager.

Minimal:

### Export visible layers to GeoJSON

Menghasilkan:

```text
semarang-webgis-export.geojson
```

### Export attribute table to CSV

Menghasilkan:

```text
semarang-webgis-data.csv
```

CSV harus berisi:

```text
id
name
type
category
status
latitude
longitude
description
```

Jika polygon/line diekspor ke CSV, sertakan geometry centroid atau geometry type.

---

# 26. GEOJSON DATA MANAGEMENT

Buat struktur JavaScript seperti:

```javascript
const datasets = {
    administrative: {...},
    robZones: {...},
    subsidenceZones: {...},
    coastline: {...},
    rivers: {...},
    drainage: {...},
    landUse: {...},
    monitoringStations: {...}
};
```

Kemudian buat:

```javascript
const layerGroups = {
    administrative: L.layerGroup(),
    rob: L.layerGroup(),
    subsidence: L.layerGroup(),
    physical: L.layerGroup(),
    landUse: L.layerGroup(),
    monitoring: L.layerGroup()
};
```

Tujuannya agar project mudah dikembangkan ketika nantinya mock data diganti dengan data penelitian sebenarnya.

---

# 27. METADATA

Setiap dataset harus memiliki metadata minimal:

```javascript
{
    source: "Demonstration Dataset",
    status: "Mock Data",
    year: 2026,
    description: "...",
    geometryType: "Polygon"
}
```

Jangan memberikan kesan bahwa mock data adalah data observasi resmi.

---

# 28. DATA INFORMATION PANEL

Tambahkan tombol:

**ⓘ About Data**

Panel berisi:

- nama aplikasi;
- wilayah kajian;
- tujuan;
- jenis data;
- status data;
- tanggal pembaruan;
- catatan bahwa dataset saat ini adalah mock/demo;
- teknologi yang digunakan.

---

# 29. MAP TOOLS

Tambahkan fitur fundamental yang memang berguna.

Minimal:

- Zoom In
- Zoom Out
- Locate Me
- Reset Extent
- Fullscreen
- Search
- Layer Manager
- Legend
- Coordinate Display
- Scale Bar
- Data Export
- About/Data Info

Jangan menambahkan fitur hanya agar terlihat banyak.

Setiap fitur harus mempunyai alasan UX yang jelas.

---

# 30. OPTIONAL ANALYTICAL TOOLS

Jika dapat dibuat tanpa membuat aplikasi terlalu berat, tambahkan:

### Measure Distance

User dapat mengukur jarak antar titik.

### Measure Area

User dapat menggambar polygon dan mendapatkan luas.

### Coordinate Inspector

Ketika user klik peta, tampilkan:

```text
Latitude
Longitude
```

### Layer Transparency

Untuk layer polygon tertentu:

```text
Opacity: ━━━━━●━━
```

Ini sangat berguna untuk overlay land use, rob, dan subsidence.

---

# 31. MAP STATE

Ketika user:

- mengganti basemap;
- membuka layer;
- menutup layer;
- memilih feature;

jangan melakukan reload halaman.

State aplikasi harus tetap dipertahankan.

---

# 32. PERFORMANCE

Ini sangat penting.

Aplikasi harus tetap ringan.

Gunakan:

```javascript
preferCanvas: true
```

Gunakan:

- circleMarker;
- GeoJSON;
- layerGroup;
- event delegation bila memungkinkan.

Hindari:

- animasi berlebihan;
- DOM element berlebihan;
- marker HTML ribuan;
- library yang tidak diperlukan;
- gambar besar;
- dependency berat.

Jika jumlah feature sedikit, jangan menggunakan teknik clustering yang tidak diperlukan.

Jika jumlah feature meningkat signifikan, struktur kode harus mudah dikembangkan menjadi:

- MarkerCluster;
- vector tiles;
- server-side GeoJSON;
- WMS/WFS.

---

# 33. ACCESSIBILITY

Perhatikan:

- kontras warna;
- ukuran tombol;
- keyboard navigation;
- `aria-label`;
- tooltip;
- focus state;
- readable typography.

Jangan mengandalkan warna saja untuk membedakan kategori.

---

# 34. RESPONSIVE BREAKPOINT

Gunakan setidaknya:

```css
@media (max-width: 1200px)
@media (max-width: 900px)
@media (max-width: 768px)
@media (max-width: 480px)
```

Tetapi jangan membuat layout hanya berdasarkan angka tersebut.

Gunakan pendekatan:

**desktop → tablet → mobile**

dan pastikan tidak ada:

- overlap;
- clipping;
- horizontal overflow;
- popup keluar layar;
- tombol terlalu kecil;
- panel menutupi seluruh map.

---

# 35. VISUAL DESIGN

Gunakan desain yang lebih profesional dan berbeda dari WebGIS sebelumnya.

Hindari warna biru-putih yang terlalu generik.

Gunakan visual language:

### Primary

Deep Ocean:

```text
#075985
```

### Secondary

Ocean Blue:

```text
#0284C7
```

### Accent

Teal:

```text
#0F766E
```

### Risk

Rose:

```text
#E11D48
```

### Warning

Amber:

```text
#F59E0B
```

### Dark UI

```text
#0F172A
```

### Background

```text
#F8FAFC
```

Gunakan warna secara konsisten.

Jangan membuat peta terlihat seperti dashboard penuh warna.

---

# 36. CARTOGRAPHIC HIERARCHY

Pastikan terdapat hierarchy:

### Level 1
Basemap

### Level 2
Administrative boundary

### Level 3
Physical environment

### Level 4
Thematic polygons

### Level 5
Infrastructure

### Level 6
Monitoring points

Monitoring point harus menjadi salah satu visual paling mudah ditemukan.

---

# 37. POPUP DATA TABLE

Untuk attribute information, gunakan tabel:

```text
┌─────────────────────┬─────────────────┐
│ Attribute           │ Value           │
├─────────────────────┼─────────────────┤
│ Station ID          │ SMG-001         │
│ Category            │ Subsidence      │
│ Status              │ Active          │
│ Observation         │ High            │
└─────────────────────┴─────────────────┘
```

Gunakan CSS modern.

Jangan menggunakan `<table>` browser default.

---

# 38. ERROR HANDLING

Jika geolocation ditolak:

Tampilkan toast:

> Location access was denied.

Jika layer gagal dimuat:

> Unable to load this layer.

Jika export tidak memiliki data:

> No active features available for export.

Jangan membuat aplikasi crash.

---

# 39. TOAST NOTIFICATION

Buat sistem toast kecil untuk:

- layer activated;
- layer disabled;
- export completed;
- location found;
- location permission denied;
- data copied;
- measurement completed.

Toast tidak boleh mengganggu peta.

---

# 40. LOADING STATE

Tambahkan loading indicator ketika aplikasi pertama kali dibuka.

Contoh:

```text
Loading Semarang Coastal Map...
```

Setelah semua layer siap:

```text
Map Ready
```

Kemudian hilangkan loading overlay.

---

# 41. MAP EXTENT

Set initial extent pada wilayah Kota Semarang dan pesisirnya.

Jangan membuat map default seluruh Jawa atau Indonesia.

Gunakan `fitBounds()` berdasarkan extent data.

---

# 42. GEOJSON QUALITY

Gunakan GeoJSON yang valid.

Pastikan:

- koordinat menggunakan `[longitude, latitude]`;
- geometry valid;
- FeatureCollection valid;
- properties konsisten;
- tidak menggunakan koordinat fiktif yang jelas berada di luar Semarang.

Polygon harus menyerupai bentuk wilayah yang masuk akal.

---

# 43. DATA DISCLAIMER

Tampilkan:

> **Data Status: Demonstration Dataset**

dan:

> Dataset pada prototype ini digunakan untuk demonstrasi sistem dan bukan pengganti data observasi resmi, data pemerintah, atau hasil penelitian.

Ini penting agar aplikasi tidak memberikan klaim ilmiah palsu.

---

# 44. CODE ORGANIZATION

Walaupun hanya satu file HTML, struktur kode harus profesional:

```text
HTML
│
├── Head
│   ├── Meta
│   ├── Fonts
│   └── Leaflet CSS
│
├── Body
│   ├── Map
│   ├── App Header
│   ├── Toolbar
│   ├── Layer Manager
│   ├── Legend
│   ├── Info Panel
│   ├── Coordinate Bar
│   ├── Toast
│   └── Loading Screen
│
└── JavaScript
    ├── Configuration
    ├── Basemap
    ├── GeoJSON Data
    ├── Layer Factory
    ├── Styling
    ├── Popup
    ├── Search
    ├── Layer Manager
    ├── Export
    ├── Measurement
    ├── Geolocation
    ├── UI State
    └── Initialization
```

Gunakan fungsi modular.

Contoh:

```javascript
initializeMap()
initializeBasemaps()
initializeLayers()
initializeControls()
initializeSearch()
initializeExport()
initializeInteractions()
```

---

# 45. PROFESSIONAL GIS REVIEW

Sebelum memberikan kode final, lakukan review internal sebagai:

### GIS Developer

Periksa:

- apakah geometry masuk akal;
- apakah CRS GeoJSON benar;
- apakah hierarchy layer benar;
- apakah simbologi sesuai data;
- apakah layer dapat dikontrol;
- apakah popup memberikan informasi relevan.

### Frontend Developer

Periksa:

- responsive layout;
- JavaScript errors;
- event listener;
- DOM structure;
- accessibility;
- performance.

### Spatial UI/UX Designer

Periksa:

- apakah map tetap menjadi fokus;
- apakah panel terlalu ramai;
- apakah informasi mudah ditemukan;
- apakah legenda mudah dipahami;
- apakah mobile UI tidak overlap.

### End User

Bayangkan user pertama kali membuka aplikasi.

User harus dapat memahami dalam beberapa detik:

1. ini peta apa;
2. wilayah mana yang dipetakan;
3. apa arti warna;
4. bagaimana membuka layer;
5. bagaimana mencari lokasi;
6. bagaimana membaca popup.

Jika salah satu hal tersebut sulit dipahami, perbaiki desain.

---

# 46. SELF-AUDIT SEBELUM OUTPUT

Sebelum memberikan kode final, lakukan pemeriksaan berikut:

### FUNCTIONAL

- [ ] Map tampil
- [ ] Basemap dapat diganti
- [ ] Layer dapat diaktifkan
- [ ] Layer dapat dimatikan
- [ ] Search bekerja
- [ ] Popup bekerja
- [ ] Hover bekerja
- [ ] Locate bekerja
- [ ] Reset view bekerja
- [ ] Legend bekerja
- [ ] Export GeoJSON bekerja
- [ ] Export CSV bekerja
- [ ] Measurement bekerja jika diimplementasikan
- [ ] Fullscreen bekerja
- [ ] Toast bekerja

### RESPONSIVE

- [ ] Desktop 1920px
- [ ] Desktop 1366px
- [ ] Laptop 1280px
- [ ] Tablet
- [ ] Mobile 768px
- [ ] Mobile 480px

Tidak boleh ada:

- overlap;
- clipping;
- horizontal scroll;
- panel keluar layar;
- tombol tertutup;
- popup tidak terbaca.

### GIS

- [ ] GeoJSON valid
- [ ] Coordinate order benar
- [ ] Layer hierarchy jelas
- [ ] Symbology konsisten
- [ ] Legend sesuai layer
- [ ] Feature interaction jelas
- [ ] Data memiliki metadata

### PERFORMANCE

- [ ] `preferCanvas: true`
- [ ] dependency seminimal mungkin
- [ ] tidak ada library tidak terpakai
- [ ] tidak ada gambar besar
- [ ] tidak ada animasi berlebihan
- [ ] tidak ada DOM berlebihan

---

# 47. IMPORTANT — JANGAN OVERDESIGN

Saya tidak ingin WebGIS yang terlihat seperti:

> "dashboard admin dengan terlalu banyak kartu, grafik, badge, warna, dan panel."

Ini tetap merupakan **MAP APPLICATION**.

Prioritas:

```text
MAP
↓
LAYERS
↓
SPATIAL INFORMATION
↓
INTERACTION
↓
ANALYSIS
↓
EXPORT
```

Bukan:

```text
DASHBOARD
↓
CARDS
↓
BUTTON
↓
CHART
↓
MAP kecil
```

Peta harus mendapatkan area terbesar pada layar.

---

# 48. FUTURE-READY ARCHITECTURE

Kode harus mudah dikembangkan dari mock GeoJSON menjadi data sebenarnya.

Struktur harus memungkinkan integrasi berikut di masa depan:

```text
GeoJSON
WMS
WFS
Vector Tiles
PostGIS
GeoServer
REST API
Cloud-hosted spatial data
```

Tetapi **JANGAN memasukkan backend tersebut sekarang**.

Prototype harus tetap berjalan hanya dengan:

```text
index.html
```

tanpa server khusus.

---

# 49. FUTURE DATA SOURCES

Struktur layer nantinya harus memungkinkan data aktual dari:

- BIG
- Ina-Geoportal
- Pemerintah Kota Semarang
- BPS
- BMKG
- BNPB
- BIG coastline/topography data
- data DEM
- data InSAR/subsidence
- data pasang surut
- data penggunaan lahan
- RTRW/RDTR
- data jaringan sungai
- data observasi lapangan

Tetapi jangan mengarang seolah-olah mock dataset berasal dari institusi tersebut.

---

# 50. FINAL OUTPUT

Setelah semua pertimbangan di atas:

## OUTPUT 1

Berikan:

**`index.html`**

dalam satu code block lengkap.

Jangan potong kode.

Jangan menggunakan placeholder.

Jangan menggunakan:

```text
...
```

untuk menggantikan kode.

Jangan mengatakan:

> "bagian ini dapat dikembangkan..."

Implementasikan langsung.

---

## OUTPUT 2

Setelah kode selesai, berikan penjelasan singkat:

### A. Architecture
Jelaskan struktur aplikasi.

### B. GIS Layers
Jelaskan layer yang tersedia.

### C. UX
Jelaskan perubahan UI/UX.

### D. Responsive Design
Jelaskan perilaku desktop/tablet/mobile.

### E. Performance
Jelaskan optimasi yang dilakukan.

### F. Future Development
Jelaskan bagaimana mock GeoJSON nantinya dapat diganti dengan data penelitian sebenarnya.

---

# 51. FINAL QUALITY STANDARD

Anggap aplikasi ini akan dinilai oleh:

> **Senior GIS Developer + Cartographer + Frontend Engineer + End User**

Jangan hanya membuat aplikasi yang "berfungsi".

Buat aplikasi yang:

**clean**

**professional**

**spatially meaningful**

**intuitive**

**responsive**

**lightweight**

**maintainable**

**data-oriented**

**cartographically consistent**

dan

**production-ready.**

Prioritaskan kualitas pengalaman pengguna daripada jumlah fitur.

Jika sebuah fitur tidak meningkatkan kemampuan user dalam memahami atau menganalisis kondisi spasial Semarang, jangan memasukkannya.

## SEKARANG EKSEKUSI.

Tulis seluruh `index.html` secara utuh.