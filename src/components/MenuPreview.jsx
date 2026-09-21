export default function MenuPreview() {
  const menus = [
    {
      title: "Sate Daging Full",
      badge: "Best Seller",
      tag: "Full Daging",
      description:
        "100% daging ayam murni tanpa lemak, dipotong pipih memanjang khas Ponorogo yang empuk dan gurih.",
    },
    {
      title: "Sate Kulit",
      badge: "Favorit",
      tag: "Full Kulit",
      description:
        "Tusakan full kulit ayam pilihan dengan tekstur kenyal-gurih dan bumbu rempah yang meresap sempurna.",
    },
    {
      title: "Sate Jeroan",
      badge: "Khas",
      tag: "Full Jeroan",
      description:
        "Tusakan khusus jeroan (hati & ampela) yang diolah higienis, gurih, dan bebas bau amis.",
    },
  ];

  const events = [
    {
      icon: (
        <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Acara Keluarga & Arisan",
      description:
        "Sajian lezat & hangat untuk kumpul keluarga besar, syukuran, hingga arisan.",
    },
    {
      icon: (
        <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Pernikahan & Hantaran",
      description:
        "Siap melayani booth prasmanan/pondokan sate di pesta pernikahan & lamaran.",
    },
    {
      icon: (
        <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m-9 0h18v2.25H3V7.5z" />
        </svg>
      ),
      title: "Oleh-Oleh Besek Khas",
      description:
        "Dikemas besek bambu tradisional rapi & higienis dengan bumbu terpisah, aman dibawa perjalanan jauh.",
    },
    {
      icon: (
        <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      title: "Event & Rapat Kantor",
      description:
        "Konsumsi praktis & mengenyangkan untuk meeting, seminar, hingga gathering instansi.",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-[#FFFBF5]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER VARIAN MENU */}
        <div className="text-center mb-12">
          <span className="text-amber-800 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-amber-100/80 border border-amber-300/50 px-4 py-1.5 rounded-full">
            Varian Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C0D05] mt-3">
            Pilihan Varian Sate
          </h2>
          <p className="text-amber-900/70 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Bisa pesan per varian atau dicampur (daging, kulit, & jeroan) dalam satu porsi sesuai selera pesananmu!
          </p>
        </div>

        {/* GRID CARD VARIAN MENU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {menus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-md border border-amber-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#8B3E13] text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {item.tag}
                  </span>
                  <span className="bg-amber-100/80 text-amber-900 border border-amber-300/60 text-xs font-medium px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1C0D05] mb-2">
                  {item.title}
                </h3>

                <p className="text-amber-900/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BLOK LAYANAN ACARA & KEMASAN (Gradiyen Cokelat Keemasan Warm) */}
        <div className="mt-16 bg-gradient-to-br from-[#FFF5EA] via-[#FDF0E1] to-[#F8E7D1] rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200 text-center relative overflow-hidden">
          
          {/* Accent Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-[#8B3E13] text-xs sm:text-sm font-bold tracking-widest uppercase bg-amber-200/60 border border-amber-300 px-4 py-1.5 rounded-full inline-block">
            Siap Melayani Berbagai Momen
          </span>
          
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2C1408] mt-4 mb-3 tracking-tight">
            Pesan Sate untuk Berbagai Acara Spesial
          </h3>
          
          <p className="text-[#5C3218] text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Melayani pemesanan porsi kecil maupun besar. Tersedia pilihan kemasan Besek Tradisional, Box Praktis, hingga layanan prasmanan di lokasi.
          </p>

          {/* OPSI KEMASAN BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="bg-white/80 border border-amber-300 text-[#8B3E13] font-medium text-xs px-3.5 py-1.5 rounded-lg shadow-sm">
              Kemasan Besek Bambu
            </span>
            <span className="bg-white/80 border border-amber-300 text-[#8B3E13] font-medium text-xs px-3.5 py-1.5 rounded-lg shadow-sm">
              Box Hantaran
            </span>
            <span className="bg-white/80 border border-amber-300 text-[#8B3E13] font-medium text-xs px-3.5 py-1.5 rounded-lg shadow-sm">
              Catering Prasmanan
            </span>
          </div>

          {/* GRID CARDS ACARA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white hover:bg-amber-50/60 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B3E13] to-[#B85012] text-white flex items-center justify-center shadow-md mb-4">
                    {event.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#2C1408] mb-2">
                    {event.title}
                  </h4>
                  <p className="text-[#6C3C1B] text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}