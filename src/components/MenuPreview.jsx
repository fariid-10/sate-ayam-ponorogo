"use client";

import { useState } from "react";
import Image from "next/image";

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState("all");

  const menus = [
    {
      id: "daging",
      title: "Sate Daging Full",
      badge: "Best Seller",
      category: "favorite",
      portionText: "10 Tusuk / Porsi",
      tagline: "100% Daging Dada & Paha Pilihan",
      description:
        "Irisan daging ayam murni dipotong pipih memanjang khas Ponorogo. Sangat empuk, bebas gajih, dan bumbu rempahnya meresap sempurna hingga ke dalam serat.",
      basePriceNote: "Lengkap bumbu kacang halus, sambal pedas & irisan bawang merah",
      waText: "Halo Mas Yudi, saya mau pesan Sate Daging Full. Boleh info harga dan minimal ordernya?",
    },
    {
      id: "campur",
      title: "Sate Campur (Spesial)",
      badge: "Paling Diminati",
      category: "favorite",
      portionText: "10 Tusuk / Porsi",
      tagline: "Kombinasi Daging + Kulit + Jeroan",
      description:
        "Pilihan komplit untuk mencicipi semua varian! Perpaduan daging empuk, kulit kenyal gurih, serta hati & ampela lezat dalam satu piring hangat.",
      basePriceNote: "Komposisi tusukan dapat disesuaikan dengan selera pesanan Anda",
      waText: "Halo Mas Yudi, saya mau pesan Sate Campur (Daging + Kulit + Jeroan). Boleh info harga per porsinya?",
    },
    {
      id: "kulit",
      title: "Sate Kulit",
      badge: "Favorit Gurih",
      category: "regular",
      portionText: "10 Tusuk / Porsi",
      tagline: "Kenyal, Gurih & Bumbu Meresap",
      description:
        "Tusukan full kulit ayam segar yang dibersihkan higienis, dimarinasi rempah, dan dibakar harum menggoda tanpa tekstur alot atau bau amis.",
      basePriceNote: "Tekstur kenyal pas berpadu bumbu kacang legit khas Ponorogo",
      waText: "Halo Mas Yudi, saya mau pesan Sate Kulit. Apakah masih tersedia malam ini?",
    },
    {
      id: "jeroan",
      title: "Sate Jeroan (Hati & Ampela)",
      badge: "Khas Tradisi",
      category: "regular",
      portionText: "10 Tusuk / Porsi",
      tagline: "Higienis, Segar & Bebas Amis",
      description:
        "Hati dan ampela ayam segar diolah khusus dengan rempah penetral aroma. Menghasilkan rasa gurih mantap khas bumbu tradisional Jawa Timur.",
      basePriceNote: "Diolah segar setiap hari dengan standar higienis keluarga",
      waText: "Halo Mas Yudi, saya mau pesan Sate Jeroan (Hati & Ampela). Apakah masih ada?",
    },
  ];

  const filteredMenus =
    activeTab === "all"
      ? menus
      : activeTab === "favorite"
      ? menus.filter((m) => m.category === "favorite")
      : menus;

  const cateringPackages = [
    {
      id: "besek",
      title: "Besek Bambu Tradisional",
      tag: "Oleh-Oleh Khas",
      description:
        "Dikemas rapi dalam besek anyaman bambu alami beralas daun pisang dengan bumbu kacang terpisah. Sangat aman dan higienis untuk perjalanan jauh.",
      waText: "Halo Mas Yudi, saya mau pesan Sate Kemasan Besek Bambu Tradisional untuk oleh-oleh.",
      icon: (
        // Bootstrap Icon: bi-box-seam
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l6.29 2.518a.5.5 0 0 1 .307.46v9.066a1.5 1.5 0 0 1-.94 1.393l-6.5 2.6a1.5 1.5 0 0 1-1.128 0l-6.5-2.6A1.5 1.5 0 0 1 0 13.228V4.162a.5.5 0 0 1 .307-.46z"/>
        </svg>
      ),
    },
    {
      id: "box",
      title: "Paket Box Rapat & Gathering",
      tag: "Praktis & Rapi",
      description:
        "Paket makan satuan berisi sate ayam, lontong/nasi, bumbu kacang gurih, sambal dan alat makan higienis. Siap santap untuk rapat kerja, instansi, dan seminar.",
      waText: "Halo Mas Yudi, saya mau tanya paket Sate Box Praktis untuk konsumsi rapat/acara kantor.",
      icon: (
        // Bootstrap Icon: bi-briefcase
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
        </svg>
      ),
    },
    {
      id: "catering",
      title: "Catering Prasmanan (Live-Grill)",
      tag: "Pondokan Resepsi",
      description:
        "Pondokan sate di pesta pernikahan, syukuran, atau arisan keluarga. Sate dibakar hangat langsung di lokasi acara dengan aroma khas yang memikat tamu undangan.",
      waText: "Halo Mas Yudi, saya mau konsultasi paket catering live-grill sate untuk acara pernikahan/keluarga.",
      icon: (
        // Bootstrap Icon: bi-people-fill
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#FFFBF5] border-t border-[#F5E2CD]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[#8B3E13] text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#F7E7CE] border border-[#E6C8A2] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Daftar Menu Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0D05] mt-4 tracking-tight">
            Varian Sate Mas Yudi
          </h2>
          <p className="text-[#6B462C] text-sm sm:text-base mt-3 leading-relaxed">
            Semua menu disajikan lengkap dengan siraman bumbu kacang sangrai lembut, sambal segar, dan irisan bawang merah khas Ponorogo.
          </p>
        </div>

        {/* TABS FILTER */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-[#8B3E13] text-white shadow-md scale-105"
                : "bg-white text-[#7C5339] border border-[#EADBCC] hover:bg-[#FFF5EA]"
            }`}
          >
            Semua Varian Sate
          </button>
          <button
            onClick={() => setActiveTab("favorite")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "favorite"
                ? "bg-[#8B3E13] text-white shadow-md scale-105"
                : "bg-white text-[#7C5339] border border-[#EADBCC] hover:bg-[#FFF5EA]"
            }`}
          >
            Paling Populer (Best Seller)
          </button>
        </div>

        {/* FOTO SHOWCASE DENGAN HOVER INTERAKTIF */}
        <div className="bg-white border border-[#EADBCC] rounded-3xl p-6 sm:p-8 mb-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row items-center gap-8 group">
          <div className="relative h-64 sm:h-72 w-full lg:w-1/2 rounded-2xl overflow-hidden bg-amber-950 shrink-0">
            <Image
              src="/ko.jpg"
              alt="Sate Ayam Ponorogo Mas Yudi Asli"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-200 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              {/* Bootstrap Icon: bi-fire */}
              <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 16 16">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16"/>
              </svg>
              <span>Dibakar Segar Setiap Pesanan</span>
            </div>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#8B3E13] uppercase tracking-wider bg-[#FFF5EA] px-3.5 py-1 rounded-md border border-[#F0D5B8]">
              Cita Rasa Otentik
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C0D05]">
              Disajikan Hangat dengan Siraman Bumbu Kacang Halus Lembut
            </h3>
            <p className="text-sm text-[#5C4232] leading-relaxed">
              Daging ayam diiris pipih memanjang khas Ponorogo dan dimarinasi bumbu sebelum dibakar. Bumbu kacangnya bertekstur kental halus dengan aroma wangi sangrai alami yang gurih-manis pas.
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="text-xs font-bold text-[#8B3E13] bg-[#FFF5EA] border border-[#F0D5B8] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                {/* Bootstrap Icon: bi-check-circle-fill */}
                <svg className="w-3.5 h-3.5 fill-emerald-600" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <span>Tersedia Lontong & Nasi</span>
              </span>
              <span className="text-xs font-bold text-[#8B3E13] bg-[#FFF5EA] border border-[#F0D5B8] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                {/* Bootstrap Icon: bi-check-circle-fill */}
                <svg className="w-3.5 h-3.5 fill-emerald-600" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <span>Bumbu Kacang Terpisah untuk Takeaway</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4 MENU CARDS GRID (BERSIH, TANPA PORSI COUNTER) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {filteredMenus.map((item) => {
            const waLink = `https://wa.me/6285850125627?text=${encodeURIComponent(item.waText)}`;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#EADBCC] rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:border-[#8B3E13] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Badge & Portion info */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8B3E13] bg-[#FFF5EA] px-3.5 py-1 rounded-full border border-[#F0D5B8]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#7C5339]">
                      {item.portionText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-[#1C0D05] mb-1 group-hover:text-[#8B3E13] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#8B3E13] mb-3">
                    {item.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#5C4232] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="text-[11px] text-[#7C5339] italic bg-[#FFFBF5] px-3 py-1.5 rounded-lg border border-[#F0D5B8] mb-6">
                    {item.basePriceNote}
                  </div>
                </div>

                {/* Direct Action Button Bersih & Jelas (Responsif HP & Layar Kecil) */}
                <div className="pt-4 border-t border-[#F8EFE5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#7C5339]">Dine-in & Bungkus</span>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B3E13] hover:bg-[#6C3C1B] text-white font-bold py-2.5 px-6 rounded-xl text-xs shadow-md transition-all hover:scale-105 active:scale-95 text-center"
                  >
                    <span>Pesan via WhatsApp</span>
                    {/* Bootstrap Icon: bi-arrow-right */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION LAYANAN BESEK BAMBU & ACARA (BERSIH & BOOTSTRAP ICONS) */}
        <div className="bg-white border border-[#EADBCC] rounded-3xl p-8 sm:p-12 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B3E13] bg-[#FFF5EA] px-3.5 py-1.5 rounded-full border border-[#F0D5B8] inline-block mb-3">
              Pesanan Khusus & Oleh-Oleh
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C0D05]">
              Paket Besek Bambu & Catering Acara
            </h3>
            <p className="text-sm text-[#6B462C] mt-2">
              Kemasan bersih, rapi, dan tradisional untuk buah tangan perjalanan atau sajian pesta keluarga Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FFFBF5] border border-[#F0D5B8] hover:border-[#8B3E13] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5EA] text-[#8B3E13] border border-[#F0D5B8] group-hover:bg-[#8B3E13] group-hover:text-white flex items-center justify-center transition-colors">
                      {pkg.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#8B3E13] bg-white px-2.5 py-1 rounded-full border border-[#F0D5B8]">
                      {pkg.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1C0D05] mb-2 group-hover:text-[#8B3E13] transition-colors">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-[#6B462C] leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/6285850125627?text=${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#8B3E13] text-[#8B3E13] hover:text-white border border-[#F0D5B8] py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <span>Pesan / Konsultasi via WA</span>
                  {/* Bootstrap Icon: bi-arrow-right */}
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
