export default function WhyUs() {
  const features = [
    {
      id: 1,
      badge: "Tekstur Juara",
      title: "Daging Sayat Pipih",
      benefit: "Empuk & Matang Merata",
      description:
        "Dipotong pipih memanjang khas Ponorogo dengan teknik fillet presisi, menghasilkan tekstur daging yang empuk, tidak alot, dan bumbu meresap sempurna hingga ke dalam.",
      icon: (
        // Bootstrap Icon: bi-check-circle-fill (Jaminan Kualitas Daging)
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
      ),
    },
    {
      id: 2,
      badge: "Resep Warisan",
      title: "Rempah Marinasi Meresap",
      benefit: "Racikan Bumbu Tradisi",
      description:
        "Sebelum dibakar di atas arang, setiap tusuk daging dimarinasi dengan racikan rempah rahasia keluarga. Gurih bumbunya merata dan terasa nikmat di setiap gigitan.",
      icon: (
        // Bootstrap Icon: bi-fire (Aroma Bakaran Rempah Arang)
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
        </svg>
      ),
    },
    {
      id: 3,
      badge: "Racikan Khas",
      title: "Bumbu Kacang Halus Sangrai",
      benefit: "Kental, Lembut & Legit",
      description:
        "Kacang tanah pilihan disangrai dan digiling halus hingga lembut berkrim. Paduan rasa manis dan gurihnya pas seimbang, beraroma sangrai otentik tanpa minyak berlebih.",
      icon: (
        // Bootstrap Icon: bi-heart-fill (Rasa Favorit Pelanggan)
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFFBF5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#8B3E13] text-xs font-bold tracking-widest uppercase bg-[#F7E7CE] px-4 py-1.5 rounded-full border border-[#E6C8A2] inline-block shadow-sm">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-[#2A1508] tracking-tight">
            Mengapa Pilih Sate Mas Yudi?
          </h2>
          <p className="text-[#6B462C] text-sm sm:text-base mt-3 leading-relaxed">
            Dedikasi kami menjaga standar cita rasa autentik Ponorogo terbaik di setiap tusukan.
          </p>
        </div>

        {/* GRID KARTU BERSIH & ELEGAN (TANPA LINK PALSU, TANPA IKON NGAWUR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F0E2D0] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2A1508]/10 hover:border-[#8B3E13] flex flex-col justify-between group"
            >
              <div>
                {/* Header Kartu: Ikon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 p-3 bg-[#FFF5EA] text-[#8B3E13] rounded-2xl border border-[#F0D5B8] group-hover:bg-[#8B3E13] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-[#8B3E13] bg-[#FFF5EA] px-3.5 py-1.5 rounded-full border border-[#F0D5B8]">
                    {item.badge}
                  </span>
                </div>

                {/* Judul & Nilai Utama */}
                <h3 className="text-xl font-bold text-[#1C0D05] mb-2 group-hover:text-[#8B3E13] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#8B3E13] mb-4">
                  {item.benefit}
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-[#5C4232] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Penegas Kualitas Bersih */}
              <div className="mt-6 pt-5 border-t border-[#F8EFE5] flex items-center gap-2 text-xs font-semibold text-emerald-800">
                {/* Bootstrap Icon: bi-check-lg */}
                <svg className="w-4 h-4 fill-current text-emerald-600 shrink-0" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
                <span>Standar Mutu Mas Yudi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
