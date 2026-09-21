export default function LocationSection() {
  const locations = [
    {
      badge: "Sesi Pagi - Siang",
      time: "08.00 - 15.00 WIB",
      title: "Pengambilan di Rumah",
      subtitle: "Khusus Pick-up & Pesanan Ambil Sendiri",
      address: "Perum. Grand Mansion B4 No.50 Kalipuro, Pungging, Mojosari, Mojokerto, Jawa Timur",
      note: "Harap pesan atau konfirmasi via WhatsApp terlebih dahulu sebelum datang mengambil pesanan.",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      btnText: "Hubungi / Konfirmasi WA",
      mapsUrl: "https://wa.me/6285850125627", // Langsung mengarah ke WA
      isPrimary: false,
    },
    {
      badge: "Sesi Sore - Malam",
      time: "17.00 - Habis",
      title: "Lapak Utama (Pacet)",
      subtitle: "Makan di Tempat (Dine-in) & Takeaway",
      address: "Lapak Sate Ponorogo, Kawasan Pacet, Mojokerto, Jawa Timur",
      note: "Sajian sate bakar hangat langsung di tempat dengan suasana khas Pacet.",
      tagColor: "bg-amber-800 text-white border-amber-900",
      btnText: "Petunjuk Arah (Google Maps)",
      mapsUrl: "https://share.google/B40YjOSpXW9iTaISi", // Link Google Maps Pacet
      isPrimary: true,
    },
  ];

  return (
    <section id="lokasi" className="py-20 bg-[#FFFBF5]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <span className="text-[#8B3E13] text-xs sm:text-sm font-bold tracking-widest uppercase bg-amber-100/80 border border-amber-300/60 px-4 py-1.5 rounded-full">
            Lokasi & Jam Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C0D05] mt-3">
            Kunjungi Lapak atau Ambil Pesananmu
          </h2>
          <p className="text-amber-900/70 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Silakan sesuaikan tempat tujuan dengan jam operasional kami di bawah ini.
          </p>
        </div>

        {/* GRID LOKASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`rounded-3xl p-7 md:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                loc.isPrimary
                  ? "bg-gradient-to-br from-[#FFF5EA] via-[#FDF0E1] to-[#F8E7D1] border-amber-400/80 shadow-lg"
                  : "bg-white border-amber-900/10 shadow-md"
              }`}
            >
              <div>
                {/* BADGE JAM & SESI */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${loc.tagColor}`}>
                    {loc.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold text-sm bg-amber-100/60 px-3 py-1 rounded-lg">
                    <svg className="w-4 h-4 text-[#8B3E13]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {loc.time}
                  </div>
                </div>

                {/* TITLE & SUBTITLE */}
                <h3 className="text-2xl font-extrabold text-[#1C0D05] mb-1">
                  {loc.title}
                </h3>
                <p className="text-[#8B3E13] text-xs font-semibold mb-4 uppercase tracking-wider">
                  {loc.subtitle}
                </p>

                {/* ALAMAT & CATATAN */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-amber-900/80 text-sm">
                    <svg className="w-5 h-5 text-[#8B3E13] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-[#5C3218] leading-relaxed">
                    <strong>Catatan:</strong> {loc.note}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B3E13] hover:bg-[#6C3C1B] text-white font-semibold py-3 px-5 rounded-xl shadow transition-all text-sm mt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {loc.btnText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}