export default function WhyUs() {
  const features = [
    {
      id: 1,
      title: "Daging Pilihan",
      description: "Daging dipotong pipih memanjang khas Ponorogo, diiris presisi sehingga teksturnya sangat empuk dan meresap sempurna.",
      icon: (
        <svg className="w-7 h-7 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Rempah Khusus",
      description: "Diolah menggunakan racikan resep rahasia keluarga dengan rempah-rempah pilihan khas Jawa Timur yang kaya rasa.",
      icon: (
        <svg className="w-7 h-7 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Bumbu Kacang Gurih",
      description: "Tekstur bumbu kacangnya lembut, halus, manis-gurih pas, serta beraroma sangrai yang khas dan menggugah selera.",
      icon: (
        <svg className="w-7 h-7 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#FFFBF5]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#B85B14] text-xs font-bold tracking-widest uppercase bg-[#F7E7CE]/60 px-3 py-1 rounded-full border border-[#E6C8A2]">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-[#2A1508]">
            Mengapa Pilih Sate Mas Yudi?
          </h2>
          <p className="text-[#664630] text-sm sm:text-base mt-3 leading-relaxed">
            Komitmen kami untuk menyajikan cita rasa autentik sate Ponorogo terbaik di setiap tusuknya.
          </p>
        </div>

        {/* GRID KARTU (KONTRASTING LIGHT CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F0E2D0] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2A1508]/5 group"
            >
              {/* IKON */}
              <div className="p-3.5 bg-[#FFF5E6] rounded-xl w-fit border border-[#F0D5B8] mb-6 group-hover:bg-[#8B4513] transition-colors duration-300">
                <div className="group-hover:brightness-200 transition-all">
                  {item.icon}
                </div>
              </div>

              {/* JUDUL */}
              <h3 className="text-xl font-bold text-[#2A1508] mb-3 group-hover:text-[#B85B14] transition-colors">
                {item.title}
              </h3>

              {/* DESKRIPSI */}
              <p className="text-sm text-[#5C4232] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}