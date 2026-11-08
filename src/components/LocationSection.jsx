"use client";

import { useState } from "react";

export default function LocationSection() {
  // State untuk kontrol zoom skala visual (instan, 0ms latency, tanpa reload iframe)
  const [zoomScales, setZoomScales] = useState({
    mojosari: 1,
    pacet: 1,
  });

  const handleZoomIn = (id) => {
    setZoomScales((prev) => ({
      ...prev,
      [id]: Math.min(Number((prev[id] + 0.25).toFixed(2)), 2.25),
    }));
  };

  const handleZoomOut = (id) => {
    setZoomScales((prev) => ({
      ...prev,
      [id]: Math.max(Number((prev[id] - 0.25).toFixed(2)), 1),
    }));
  };

  const handleResetZoom = (id) => {
    setZoomScales((prev) => ({
      ...prev,
      [id]: 1,
    }));
  };

  const locations = [
    {
      id: "mojosari",
      badge: "Sesi Pagi - Siang",
      time: "08.00 - 15.00 WIB",
      title: "Pengambilan di Rumah (Mojosari)",
      subtitle: "Khusus Pick-up & Pesanan Ambil Sendiri",
      address: "Perum. Grand Mansion B4 No.50 Kalipuro, Pungging, Mojosari, Mojokerto, Jawa Timur",
      note: "Harap konfirmasi via WhatsApp terlebih dahulu agar sate dibakar hangat & disiapkan tepat waktu saat Anda tiba.",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Perumahan+Grand+Mansion+Pungging+Mojosari+Mojokerto",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Perumahan%20Grand%20Mansion%20Pungging%20Mojosari%20Mojokerto&t=&z=16&ie=UTF8&iwloc=&output=embed",
      waText: "Halo Mas Yudi, saya mau konfirmasi ambil pesanan sate di rumah Mojosari.",
      isPrimary: false,
    },
    {
      id: "pacet",
      badge: "Sesi Sore - Malam",
      time: "17.00 - Habis",
      title: "Lapak Utama Pacet (Dine-in)",
      subtitle: "Santap di Tempat & Bungkus (Takeaway)",
      address: "Lapak Sate Ponorogo Mas Yudi, Kawasan Wisata Pacet, Mojokerto, Jawa Timur",
      note: "Nikmati sate ayam bakar hangat langsung di tempat dengan suasana udara sejuk khas pegunungan Pacet.",
      tagColor: "bg-[#8B3E13] text-white border-[#8B3E13]",
      // Titik lokasi resmi Google Maps yang diberikan oleh user
      mapsUrl: "https://maps.app.goo.gl/qQEKK8RTYV8iDsER6",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Pacet%2C%20Mojokerto%2C%20Jawa%20Timur&t=&z=16&ie=UTF8&iwloc=&output=embed",
      waText: "Halo Mas Yudi, apakah lapak sate di Pacet malam ini buka? Saya berencana mampir.",
      isPrimary: true,
    },
  ];

  return (
    <section id="lokasi" className="py-20 sm:py-24 bg-[#FFFBF5] border-t border-[#F5E2CD]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <span className="text-[#8B3E13] text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#F7E7CE] border border-[#E6C8A2] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Lokasi & Google Maps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C0D05] mt-4 tracking-tight">
            Kunjungi Lapak atau Ambil Pesanan
          </h2>
          <p className="text-[#6B462C] text-sm sm:text-base mt-3 leading-relaxed">
            Tersedia dua titik operasional dengan panduan rute Google Maps resmi untuk memudahkan perjalanan Anda.
          </p>
        </div>

        {/* GRID LOKASI DENGAN PREVIEW GOOGLE MAPS INTERAKTIF (BISA ZOOM IN/OUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`rounded-3xl p-5 sm:p-7 md:p-8 border transition-all duration-300 flex flex-col justify-between group ${
                loc.isPrimary
                  ? "bg-gradient-to-br from-[#FFF5EA] via-[#FDF0E1] to-[#F8E7D1] border-amber-300 shadow-xl"
                  : "bg-white border-[#F0E2D0] shadow-md hover:shadow-xl"
              }`}
            >
              <div>
                {/* Header Kartu: Badge & Jam Operasional */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full border shadow-sm ${loc.tagColor}`}>
                    {loc.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#8B3E13] font-extrabold text-xs sm:text-sm bg-white/90 px-3.5 py-1.5 rounded-xl border border-amber-200 shadow-sm">
                    {/* Bootstrap Icon: bi-clock-fill */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    </svg>
                    <span>{loc.time}</span>
                  </div>
                </div>

                {/* Judul & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C0D05] mb-1">
                  {loc.title}
                </h3>
                <p className="text-[#8B3E13] text-xs font-bold mb-5 uppercase tracking-wider">
                  {loc.subtitle}
                </p>

                {/* WADAH GOOGLE MAPS INTERAKTIF: HOVER NGEZOOM DIKIT + TOMBOL ZOOM MANUAL (+ & -) */}
                <div className="group/map relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-amber-900/15 mb-5 shadow-sm bg-amber-950/10 transition-all duration-300 hover:shadow-md hover:border-amber-400">
                  
                  {/* Outer wrapper: efek halus kursor ngezoom dikit (scale 1.03) */}
                  <div className="w-full h-full transition-transform duration-500 ease-out group-hover/map:scale-[1.03] origin-center">
                    {/* Iframe Peta: di-zoom langsung via CSS transform scale tanpa reload jaringan */}
                    <iframe
                      title={`Google Maps ${loc.title}`}
                      src={loc.mapsEmbedUrl}
                      style={{
                        transform: `scale(${zoomScales[loc.id]})`,
                        transformOrigin: "center center",
                      }}
                      className="w-full h-full border-0 filter contrast-[1.03] transition-transform duration-300 ease-out"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* TOMBOL ZOOM MANUAL (+ DAN -) SESUAI REQUEST: HANYA LOGO TANPA TEKS */}
                  <div className="absolute top-3 left-3 z-20 flex items-center bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-amber-300/80 p-1 gap-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleZoomIn(loc.id);
                      }}
                      disabled={zoomScales[loc.id] >= 2.25}
                      title="Perbesar Peta (Zoom In +)"
                      aria-label="Perbesar Peta"
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all touch-manipulation cursor-pointer ${
                        zoomScales[loc.id] >= 2.25
                          ? "text-stone-300 cursor-not-allowed"
                          : "text-[#8B3E13] hover:bg-[#8B3E13] hover:text-white active:scale-90"
                      }`}
                    >
                      {/* Bootstrap Icon: bi-zoom-in (Logo Zoom +) */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM6.5 4a.5.5 0 0 1 .5.5v1.5H8.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H6V4.5A.5.5 0 0 1 6.5 4"/>
                      </svg>
                    </button>
                    
                    <div className="w-[1px] h-4 bg-amber-200" />
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleZoomOut(loc.id);
                      }}
                      disabled={zoomScales[loc.id] <= 1}
                      title="Perkecil Peta (Zoom Out -)"
                      aria-label="Perkecil Peta"
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all touch-manipulation cursor-pointer ${
                        zoomScales[loc.id] <= 1
                          ? "text-stone-300 cursor-not-allowed"
                          : "text-[#8B3E13] hover:bg-[#8B3E13] hover:text-white active:scale-90"
                      }`}
                    >
                      {/* Bootstrap Icon: bi-zoom-out (Logo Zoom -) */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                        <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM4.5 6.5A.5.5 0 0 1 5 6h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"/>
                      </svg>
                    </button>

                    {/* Lencana Persentase Zoom Saat Membesar */}
                    {zoomScales[loc.id] > 1 && (
                      <>
                        <div className="w-[1px] h-4 bg-amber-200" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleResetZoom(loc.id);
                          }}
                          title="Klik untuk Reset Zoom"
                          aria-label="Reset Zoom"
                          className="px-1.5 h-8 text-[10px] font-bold text-[#8B3E13] hover:bg-[#8B3E13] hover:text-white rounded-lg transition-all touch-manipulation cursor-pointer"
                        >
                          {Math.round(zoomScales[loc.id] * 100)}%
                        </button>
                      </>
                    )}
                  </div>

                  {/* Tombol Cepat Buka Google Maps Eksternal (Bottom-Right) */}
                  <div className="absolute bottom-3 right-3 z-20 pointer-events-auto">
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-[#8B3E13] text-[#8B3E13] hover:text-white text-xs font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-md border border-amber-300 transition-all hover:scale-105 active:scale-95"
                    >
                      {/* Bootstrap Icon: bi-box-arrow-up-right */}
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                      <span>Buka Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Alamat & Catatan */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-[#5C3218] text-sm">
                    {/* Bootstrap Icon: bi-geo-alt-fill */}
                    <svg className="w-4 h-4 text-[#8B3E13] shrink-0 mt-1 fill-current" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <span className="leading-relaxed font-medium text-xs sm:text-sm">{loc.address}</span>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl p-3.5 text-xs text-[#5C3218] leading-relaxed">
                    <strong className="text-[#8B3E13]">Catatan:</strong> {loc.note}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Maps + WhatsApp) - Aman & Rapi di HP / Layar Kecil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#8B3E13] hover:bg-[#6C3C1B] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs active:scale-95 text-center"
                >
                  {/* Bootstrap Icon: bi-geo-alt-fill */}
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <a
                  href={`https://wa.me/6285850125627?text=${encodeURIComponent(loc.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FFF5EA] text-[#8B3E13] border border-amber-300 font-bold py-3 px-4 rounded-xl shadow-sm transition-all text-xs active:scale-95 text-center"
                >
                  {/* Bootstrap Icon: bi-whatsapp */}
                  <svg className="w-4 h-4 fill-current text-emerald-600 shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TIPS BERKUNJUNG CALLOUT - RESPONSIF HP */}
        <div className="bg-white border border-[#E6C8A2] rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-[#2A1508] mb-1">
              Rencana Makan di Lapak Pacet Bersama Rombongan?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B462C]">
              Disarankan melakukan reservasi beberapa jam sebelumnya agar ketersediaan porsi sate dan tempat duduk disiapkan maksimal.
            </p>
          </div>
          <a
            href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20reservasi%20tempat%20makan%20sate%20di%20Pacet%20bersama%20rombongan."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 bg-[#FFF5EA] hover:bg-[#8B3E13] text-[#8B3E13] hover:text-white border border-[#F0D5B8] text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm text-center"
          >
            Reservasi Rombongan via WA →
          </a>
        </div>

      </div>
    </section>
  );
}
