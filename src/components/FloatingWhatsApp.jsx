"use client";

import { useState } from "react";
import Image from "next/image";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Aksi Cepat & Lokasi" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* POPUP CARD DIALOG SAAT TOMBOL DIKLIK */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] bg-white border border-[#E6C8A2] rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-5">
          {/* Header Popup dengan LOGO ASLI (Bukan Icon/Emoji) */}
          <div className="bg-gradient-to-r from-[#1C0D05] to-[#2A1508] p-4 sm:p-5 text-amber-50 flex items-center justify-between border-b border-amber-900/40">
            <div className="flex items-center gap-3">
              {/* Logo Sate Mas Yudi Asli */}
              <div className="w-11 h-11 rounded-2xl bg-[#FFF8E7] p-1.5 flex items-center justify-center shadow-md shrink-0 border border-amber-300/40">
                <Image
                  src="/logo.png"
                  alt="Logo Sate Ayam Ponorogo Mas Yudi"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  Sate Ponorogo Mas Yudi
                </h3>
                <p className="text-[11px] text-amber-300/80 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online & Siap Melayani Pesanan
                </p>
              </div>
            </div>

            {/* Tombol Tutup (Bootstrap Icon: bi-x-lg) */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Menu Cepat"
              className="text-amber-200/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </button>
          </div>

          {/* Body Popup */}
          <div className="p-4 sm:p-5 space-y-4 max-h-[75vh] overflow-y-auto bg-[#FFFBF5]">
            
            {/* 1. CHAT WHATSAPP UTAMA (DEFAULT) */}
            <div className="bg-white border border-[#F0D5B8] rounded-2xl p-4 shadow-sm hover:border-[#8B3E13] transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  {/* Bootstrap Icon: bi-whatsapp */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A1508]">Pesan Cepat via WhatsApp</h4>
                  <p className="text-[11px] text-[#6B462C]">Konsultasi menu & pesan langsung</p>
                </div>
              </div>
              <a
                href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20pesan%20Sate%20Ayam%20Ponorogo%20dari%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-md transition-all active:scale-95"
              >
                <span>Buka Chat WhatsApp</span>
                {/* Bootstrap Icon: bi-arrow-right */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </a>
            </div>

            {/* 2. DUA TITIK LOKASI DILENGKAPI GOOGLE MAPS UNTUK KEDUANYA */}
            <div className="border-t border-[#F0D5B8] pt-3">
              <span className="text-[11px] font-bold text-[#8B3E13] uppercase tracking-wider block mb-3">
                Titik Lokasi & Rute Google Maps
              </span>

              {/* LOKASI 1: PENGAMBILAN RUMAH (MOJOSARI) + LINK MAPS & WA */}
              <div className="bg-white border border-[#F0E2D0] rounded-2xl p-3.5 mb-3 shadow-sm hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                    {/* Bootstrap Icon: bi-house-door-fill */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="text-xs font-bold text-[#1C0D05]">Rumah Pick-up (Mojosari)</h5>
                      <span className="text-[9px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">08.00 - 15.00</span>
                    </div>
                    <p className="text-[10px] text-[#6B462C] leading-snug mt-1">
                      Perum. Grand Mansion B4 No.50, Kalipuro, Pungging, Mojosari
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Perumahan+Grand+Mansion+Pungging+Mojosari+Mojokerto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#8B3E13] hover:bg-[#6C3C1B] text-white py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all shadow-sm active:scale-95"
                  >
                    {/* Bootstrap Icon: bi-geo-alt-fill */}
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <span>Google Maps</span>
                  </a>
                  <a
                    href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20konfirmasi%20ambil%20pesanan%20sate%20di%20rumah%20Mojosari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all shadow-sm active:scale-95"
                  >
                    {/* Bootstrap Icon: bi-whatsapp */}
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <span>Chat WA</span>
                  </a>
                </div>
              </div>

              {/* LOKASI 2: LAPAK UTAMA PACET (DINE-IN) + LINK MAPS & WA */}
              <div className="bg-white border border-[#F0E2D0] rounded-2xl p-3.5 shadow-sm hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#8B3E13] flex items-center justify-center shrink-0 mt-0.5">
                    {/* Bootstrap Icon: bi-geo-alt-fill */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="text-xs font-bold text-[#1C0D05]">Lapak Utama Pacet (Dine-in)</h5>
                      <span className="text-[9px] bg-orange-100 text-orange-900 px-1.5 py-0.5 rounded font-bold">17.00 - Habis</span>
                    </div>
                    <p className="text-[10px] text-[#6B462C] leading-snug mt-1">
                      Lapak Sate Ponorogo, Kawasan Pacet, Mojokerto
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <a
                    href="https://maps.app.goo.gl/qQEKK8RTYV8iDsER6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#8B3E13] hover:bg-[#6C3C1B] text-white py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all shadow-sm active:scale-95"
                  >
                    {/* Bootstrap Icon: bi-geo-alt-fill */}
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <span>Google Maps</span>
                  </a>
                  <a
                    href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20apakah%20lapak%20sate%20di%20Pacet%20malam%20ini%20buka?%20Saya%20berencana%20mampir."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-2.5 rounded-xl text-[11px] font-bold transition-all shadow-sm active:scale-95"
                  >
                    {/* Bootstrap Icon: bi-whatsapp */}
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <span>Chat WA</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* TOMBOL UTAMA FLOATING (TOGGLE) DENGAN IKON BOOTSTRAP */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka Menu Cepat Pemesanan dan Lokasi Maps"
        className="relative group w-14 h-14 bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-950/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping pointer-events-none" />
        )}

        {isOpen ? (
          // Bootstrap Icon: bi-x-lg
          <svg className="w-6 h-6 fill-current transition-transform duration-200 rotate-90" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        ) : (
          // Bootstrap Icon: bi-whatsapp
          <svg className="w-7 h-7 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-110" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        )}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-extrabold text-[#1C0D05] shadow">
            2
          </span>
        )}
      </button>
    </aside>
  );
}
