# 🍢 Sate Ayam Ponorogo Mas Yudi

> **Landing Page & Sistem Pemesanan Digital UMKM Kuliner Autentik Jawa Timur**  
> Mengusung konsep *Single Page Application (SPA)* modern, cepat, elegan, dan ramah pengguna ponsel pintar (*mobile-friendly*).

---

## 📌 Ikhtisar Proyek

Website ini adalah profil resmi dan pusat informasi kuliner **Sate Ayam Ponorogo Mas Yudi**, menyajikan kelezatan sate ayam khas Ponorogo dengan teknik potongan sayat pipih memanjang, bumbu marinasi rempah warisan tradisi, dan siraman bumbu kacang halus gurih beraroma sangrai.

Aplikasi dibangun menggunakan **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **Bootstrap Icons SVG**, dengan navigasi *smooth-scroll* terpadu serta integrasi pemesanan langsung ke **WhatsApp API** dan navigasi **Google Maps**.

---

## 📑 Isi Lengkap Landing Page

Website dirancang dalam satu halaman beranda yang terstruktur rapi dari atas hingga bawah:

### 1. Header & Navigasi Sticky (`src/components/Header.jsx`)
* **Logo Resmi**: Menampilkan logo identitas Mas Yudi yang tajam dan proporsional.
* **Efek Dinamis**: Latar belakang transparan di area Hero dan otomatis berubah menjadi *dark espresso backdrop-blur* berbayang lembut saat halaman digulir ke bawah.
* **Tautan Navigasi Mulus**:
  * `/#hero` — Kembali ke bagian paling atas (Home).
  * `/#about` — Cerita tradisi, filosofi, dan proses pembuatan sate.
  * `/#menu` — Daftar varian sate dan paket besek oleh-oleh / catering.
  * `/#lokasi` — Jadwal 2 sesi operasional dan peta Google Maps interaktif.
* **Tombol Aksi**: Tombol *"Pesan Sekarang"* yang langsung menghubungkan pengunjung ke WhatsApp.
* **Menu Seluler (Mobile Drawer)**: Tombol hamburger dengan transisi buka-tutup yang mulus di layar HP.

---

### 2. Bagian Utama / Hero Section (`#hero` di `src/app/page.tsx`)
* **Latar Belakang Hangat**: Foto proses pembakaran sate di atas arang batok kelapa dengan *layered dark vignette overlay* yang menyatu alami ke navbar tanpa memotong gambar atau teks latar.
* **Tagline & Headline**: *"Cita Rasa Autentik Jawa Timur — Sate Ayam Ponorogo Mas Yudi"*.
* **Dual Call to Action (CTA)**:
  * Tombol utama bergradien hangat: *"Pesan Sekarang via WA"* (membuka chat WhatsApp).
  * Tombol sekunder dengan latar kaca (*frosted glass*): *"Lihat Pilihan Menu"* (meluncur ke daftar menu).
* **Floating Trust Chips**: Tiga kartu penegas keunggulan berikon Bootstrap:
  * `bi-check-circle-fill` 100% Daging Ayam Pilihan
  * `bi-check-circle-fill` Bumbu Kacang Halus Sangrai
  * `bi-check-circle-fill` Kemasan Besek & Acara

---

### 3. Keunggulan Kami / Why Us (`src/components/WhyUs.jsx`)
Tiga kartu pilar kualitas yang membedakan Sate Mas Yudi dari sate biasa:
1. **Daging Sayat Pipih** (`bi-check-circle-fill`): Teknik fillet khas Ponorogo menghasilkan daging empuk merata tanpa bagian yang alot atau mentah di dalam.
2. **Rempah Marinasi Meresap** (`bi-fire`): Direndam bumbu rempah rahasia keluarga sebelum dibakar di atas bara arang.
3. **Bumbu Kacang Halus Sangrai** (`bi-heart-fill`): Kacang tanah pilihan digiling halus berkrim dengan rasa gurih-manis pas tanpa minyak berlebih.
* Dilengkapi penegas jaminan mutu resmi: *"Standar Mutu Mas Yudi"*.

---

### 4. Tentang Kami & Cerita Tradisi (`#about` di `src/app/page.tsx`)
* **Narasi Filosofi**: Mengupas alasan mengapa teknik irisan pipih memanjang Ponorogo unggul dalam menyerap bumbu dibanding sate potongan dadu tebal.
* **Checklist Keunggulan**: Tiga poin higienis minimalis berikon centang hijau (`bi-check-lg`):
  * *Tanpa Lemak Berlebih*
  * *Marinasi Rempah Tradisi*
  * *Bumbu Kacang Halus*
* **Kartu Komitmen Mas Yudi**: Kutipan peracik resep berlatar gelap mewah dengan lencana *"Resep Asli Ponorogo"*.
* **4 Langkah Proses Autentik**: Kartu bernomor dengan efek *hover-lift*:
  * **01. Daging Segar Pilihan** (`bi-shield-check`)
  * **02. Sayat Pipih Memanjang** (`bi-scissors`)
  * **03. Marinasi Rempah Tradisi** (`bi-droplet-half`)
  * **04. Bumbu Kacang Halus Sangrai** (`bi-star-fill`)

---

### 5. Daftar Menu & Paket Acara (`#menu` di `src/components/MenuPreview.jsx`)
* **Filter Kategori**: Tombol tab interaktif untuk menyaring menu (*Semua Varian Sate* vs *Paling Populer*).
* **Showcase Produk**: Foto hidangan sate ayam asli hangat beralaskan piring saji dan siraman bumbu kacang kental.
* **4 Kartu Varian Sate**:
  1. **Sate Daging Full** (*Best Seller*) — 100% daging murni tanpa lemak.
  2. **Sate Campur Spesial** (*Paling Diminati*) — Paduan daging empuk, kulit kenyal gurih, dan jeroan hati-ampela.
  3. **Sate Kulit** (*Favorit Gurih*) — Kulit segar higienis bertekstur kenyal pas.
  4. **Sate Jeroan** (*Khas Tradisi*) — Hati dan ampela ayam segar bebas amis dengan rempah penetral alami.
* **Direct Order per Menu**: Setiap kartu memiliki tombol *"Pesan via WhatsApp"* dengan template pesan yang otomatis menyebutkan nama menu yang dipilih.
* **Pesanan Khusus & Oleh-Oleh**:
  * **Besek Bambu Tradisional** (`bi-box-seam`): Kemasan daun pisang dan anyaman bambu rapi untuk oleh-oleh perjalanan jauh.
  * **Paket Box Rapat & Kantor** (`bi-briefcase`): Sajian praktis satu porsi lengkap dengan lontong/nasi dan alat makan untuk seminar atau instansi.
  * **Catering Prasmanan Live-Grill** (`bi-people-fill`): Pondokan sate dibakar langsung di lokasi resepsi pernikahan atau syukuran keluarga.

---

### 6. Lokasi & Peta Interaktif (`#lokasi` di `src/components/LocationSection.jsx`)
Memuat 2 titik operasional resmi Mas Yudi:
* **Titik 1: Pengambilan di Rumah (Mojosari)** — Khusus *pick-up* / ambil sendiri (08.00 - 15.00 WIB) di Perum. Grand Mansion B4 No.50 Kalipuro, Pungging, Mojosari.
* **Titik 2: Lapak Utama Pacet (Dine-in)** — Santap di tempat & bungkus (17.00 - Habis) di kawasan wisata Pacet, Mojokerto dengan titik rute resmi: [`https://maps.app.goo.gl/qQEKK8RTYV8iDsER6`](https://maps.app.goo.gl/qQEKK8RTYV8iDsER6).
* **Fitur Peta Interaktif**:
  * **Efek Hover Zoom**: Mengarahkan kursor ke wadah peta otomatis memberikan pembesaran visual halus (`scale-[1.04]`).
  * **Tombol Kontrol Zoom Manual**: Dua tombol ikon minimalis di pojok kiri atas—**Zoom In (`+`)** berikon `bi-zoom-in` dan **Zoom Out (`-`)** berikon `bi-zoom-out`—untuk mengubah skala peta Google Maps secara instan.
  * **Interaksi Sentuh & Geser**: Peta dapat digeser (*drag*) dan di-*zoom* langsung menggunakan *mouse wheel* atau gestur dua jari di layar ponsel.
  * **Tombol Buka Rute**: Tombol *"Buka Google Maps"* di pojok kanan bawah untuk langsung membuka rute di aplikasi peta ponsel.
* **Callout Reservasi**: Bantuan reservasi tempat untuk rombongan keluarga di lapak Pacet.

---

### 7. Widget Melayang Kanan Bawah (`src/components/FloatingWhatsApp.jsx`)
* Tombol hijau WhatsApp melayang di sudut kanan bawah dengan efek denyut halus (*pulse*).
* Saat diklik, membuka dialog kartu aksi cepat:
  * **Header Brand**: Menampilkan logo asli Mas Yudi dan indikator status *Online*.
  * **Chat Cepat WhatsApp**: Tombol satu klik untuk konsultasi dan pemesanan umum.
  * **Dua Kartu Lokasi**: Menampilkan alamat cabang Mojosari & Pacet, lengkap dengan tombol **"Google Maps"** berikon `bi-geo-alt-fill` dan tombol **"Chat WA"** berikon `bi-whatsapp`.

---

### 8. Bagian Footer (`src/components/Footer.jsx`)
* Identitas dan ringkasan nilai rasa autentik Sate Ponorogo Mas Yudi.
* Navigasi cepat ke seluruh bagian halaman.
* Jam operasional sesi pagi (Mojosari) dan malam (Pacet).
* Alamat resmi serta tautan langsung WhatsApp.
* Hak cipta © Mas Yudi.

---

## 🔄 Ringkasan Perubahan & Redesign (Changelog)

| Bagian | Kondisi Awal | Hasil Redesign Terbaru |
| :--- | :--- | :--- |
| **Arsitektur Halaman** | Halaman Tentang Kami terpisah di `/about`. | Menjadi **Single Page Application (`/#about`)** dengan *smooth scroll*; route `/about` di-redirect otomatis. |
| **Hero Section** | Gambar kepotong kaku di bawah navbar; ada bar teks pipih yang canggung. | Vignette gradient menyatu ke navbar; bar teks diganti **Floating Trust Chips** berikon Bootstrap. |
| **Keunggulan (`WhyUs`)** | Ikon petir/tetesan air tidak nyambung; ada link palsu *"Pelajari Lebih Lanjut"*. | Ikon kuliner kontekstual (`bi-check-circle-fill`, `bi-fire`, `bi-heart-fill`); tombol palsu diganti penegas mutu *"Standar Mutu Mas Yudi"*. |
| **Tentang Kami** | Statis dengan dot list biasa. | Tata letak seimbang: Narasi teknik sayat pipih, checklist hijau (`bi-check-lg`), kutipan Mas Yudi, dan 4 langkah proses autentik dengan *hover-lift*. |
| **Menu Section** | Counter porsi `(- 1 +)` yang tidak berguna untuk alur WhatsApp. | Counter porsi dihapus; ditambahkan **tab filter kategori**, deskripsi bumbu, dan tombol pesan otomatis per menu. |
| **Layanan Khusus** | Ikon kartun / emoji AI. | Ikon resmi Bootstrap SVG (`bi-box-seam`, `bi-briefcase`, `bi-people-fill`) untuk Besek Bambu, Box Rapat, & Catering. |
| **Google Maps** | Belum ada preview interaktif; link Pacet belum spesifik. | Peta interaktif dengan **kombinasi hover zoom (`scale-[1.04]`) + tombol manual zoom `+` dan `-`** serta titik resmi Pacet ([`maps.app.goo.gl/qQEKK8RTYV8iDsER6`](https://maps.app.goo.gl/qQEKK8RTYV8iDsER6)). |
| **Floating Action Hub** | Tombol WA biasa tanpa cabang. | Dialog pop-up berlogo asli `/logo.png`, tombol chat utama, dan pilihan 2 titik cabang (Google Maps & WA). |
| **Tampilan HP** | Teks dan tombol sempat bertabrakan di layar 320px–375px. | Dioptimalkan 100% responsif (*mobile-first*): tombol aksi menjadi 1 kolom penuh (*w-full*) yang ramah sentuhan jempol (*thumb-friendly*). |

---

## 💻 Teknologi yang Digunakan

* **Core Framework**: [Next.js](https://nextjs.org/) 16.3.5 (App Router, Turbopack)
* **UI Library**: [React](https://react.dev/) 19.2.8
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/postcss`)
* **Tipografi**: Inter (via `next/font/google`)
* **Ikon**: Bootstrap Icons (Inline SVG resmi standar web, bebas dependensi eksternal)
* **Bahasa**: TypeScript (`.ts`, `.tsx`) & JavaScript (`.jsx`)
* **Metadata & SEO**: Schema.org `Restaurant` JSON-LD, OpenGraph, dan Meta Tags lengkap di `src/app/layout.tsx`.

---

## 🚀 Panduan Menjalankan Proyek Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru) terpasang di komputer Anda.

### 1. Jalankan Development Server
```bash
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000) untuk melihat website secara langsung.

### 2. Pemeriksaan Tipe TypeScript
```bash
npx tsc --noEmit
```

### 3. Pemeriksaan Linter Kode (ESLint)
```bash
npm run lint
```

### 4. Build untuk Lingkungan Produksi
```bash
npm run build
npm run start
```

> ⚠️ **Catatan Penting**: Sesuai instruksi pengembang, perubahan saat ini disimpan pada repositori lokal dan **belum di-push/pull ke GitHub remote**.

---

## 📁 Struktur Direktori

```text
sate-ayam-ponorogo/
├── public/                     # Aset statis (logo, background arang, foto produk)
│   ├── logo.png                # Logo resmi Mas Yudi
│   ├── main-bg.jpg             # Foto proses pembakaran sate untuk Hero
│   └── ko.jpg                  # Foto hidangan sate ayam asli
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/
│   │   │   └── page.jsx        # Redirect otomatis ke /#about
│   │   ├── globals.css         # CSS global Tailwind v4 & smooth-scroll
│   │   ├── layout.tsx          # Root Layout, SEO Schema.org, Header, Footer, Floating Hub
│   │   └── page.tsx            # Halaman beranda utama
│   └── components/             # Komponen UI modular
│       ├── FloatingWhatsApp.jsx # Widget melayang kanan bawah (Chat WA & 2 Titik Maps)
│       ├── Footer.jsx          # Footer informasi & kontak
│       ├── Header.jsx          # Navbar fixed dengan backdrop-blur & menu seluler
│       ├── LocationSection.jsx # 2 Titik lokasi & Google Maps interaktif (Dual Zoom)
│       ├── MenuPreview.jsx     # Daftar 4 varian sate & 3 paket acara/oleh-oleh
│       └── WhyUs.jsx           # 3 Kartu keunggulan cita rasa Mas Yudi
├── PROJECT_OVERVIEW.md         # Ikhtisar teknis & changelog detail proyek
├── README.md                   # Dokumentasi utama repositori
└── package.json                # Konfigurasi dependensi proyek
```

---

*Dikelola dengan penuh dedikasi untuk melestarikan cita rasa autentik Sate Ayam Ponorogo Mas Yudi.*
