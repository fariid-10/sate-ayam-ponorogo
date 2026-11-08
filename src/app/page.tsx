import Link from "next/link";
import WhyUs from "@/components/WhyUs";
import MenuPreview from "@/components/MenuPreview";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20pesan%20Sate%20Ayam%20Ponorogo%20dari%20website.";

  const storySteps = [
    {
      step: "01",
      title: "Daging Segar Pilihan",
      desc: "Dipilih dari daging dada dan paha ayam segar setiap hari, tanpa campuran lemak berlebih atau kulit sisa.",
      icon: (
        // Bootstrap Icon: bi-shield-check
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Sayat Pipih Memanjang",
      desc: "Teknik sayat fillet khas Ponorogo yang presisi agar tekstur daging empuk merata dan mudah menyerap bumbu marinasi.",
      icon: (
        // Bootstrap Icon: bi-scissors
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.66a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Marinasi Rempah Tradisi",
      desc: "Perendaman dengan racikan bumbu rempah rahasia keluarga sebelum dibakar di atas bara arang batok kelapa.",
      icon: (
        // Bootstrap Icon: bi-droplet-half
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 4.02 4.634 6.07 2.522 6.43 2.153 6.79 1.78 7.13 1.4c.027-.03.054-.06.08-.09zM4.07 6.685C3.381 7.598 3 8.742 3 10a5 5 0 0 0 5 5v-1.074c-.534-.05-1.048-.198-1.5-.444-.645-.35-1.15-.892-1.428-1.574-.108-.266-.17-.56-.17-.882 0-.317.06-.607.168-.868.27-.655.76-1.18 1.38-1.528.435-.244.93-.388 1.45-.43V7.202c-.754.05-1.472.274-2.1.65-.635.38-1.157.94-1.47 1.63"/>
        </svg>
      ),
    },
    {
      step: "04",
      title: "Bumbu Kacang Halus Sangrai",
      desc: "Kacang tanah sangrai digiling lembut berkrim dengan rasa manis-gurih khas yang harum menggugah selera.",
      icon: (
        // Bootstrap Icon: bi-star-fill
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFBF5] text-[#2A1508]">
      {/* HERO SECTION DENGAN ID "hero" */}
      <section
        id="hero"
        className="relative min-h-[95vh] sm:min-h-screen bg-cover bg-[center_35%] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      >
        {/* Layered Gradient Vignette untuk blending natural dengan navbar tanpa gambar kepotong */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0D05]/95 via-black/70 to-[#1C0D05]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.9),transparent_65%)]" />

        {/* Ornamen Kilau Hangat Ambient */}
        <div className="absolute -top-28 -left-28 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Konten Hero */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl pt-36 sm:pt-44 pb-20 sm:pb-28 flex flex-col items-center">
          {/* Badge Tagline dengan Bootstrap Icon */}
          <span className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-black/60 px-4 py-1.5 rounded-full border border-amber-400/30 mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Cita Rasa Autentik Jawa Timur
          </span>

          {/* Heading Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl mb-6">
            Sate Ayam Ponorogo <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Mas Yudi
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-base sm:text-xl text-amber-100/90 max-w-2xl leading-relaxed drop-shadow-md mb-10 font-normal">
            Daging diiris pipih memanjang khas Ponorogo yang lembut, dimarinasi bumbu rempah tradisi dan disiram bumbu kacang gurih beraroma sangrai otentik.
          </p>

          {/* DUAL CALL TO ACTION (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#B85B14] to-[#8B3E13] hover:from-[#A04D0E] hover:to-[#74330F] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl shadow-orange-950/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Bootstrap Icon: bi-whatsapp */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              <span>Pesan Sekarang via WA</span>
            </a>

            <Link
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-amber-100 border border-amber-300/30 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Lihat Pilihan Menu
            </Link>
          </div>

          {/* FLOATING TRUST CHIPS DENGAN BOOTSTRAP ICONS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-amber-200/90">
            <div className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-amber-500/20 backdrop-blur-sm">
              {/* Bootstrap Icon: bi-check-circle-fill */}
              <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <span>100% Daging Ayam Pilihan</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-amber-500/20 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <span>Bumbu Kacang Halus Sangrai</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-amber-500/20 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <span>Kemasan Besek & Acara</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION KEUNGGULAN (WHY US) */}
      <WhyUs />

      {/* SECTION TENTANG KAMI DENGAN ID "about" (INTERAKTIF & HARMONIS) */}
      <section
        id="about"
        className="py-20 sm:py-24 bg-gradient-to-b from-[#FFFBF5] via-[#FFF3E4] to-[#FFFBF5] border-t border-[#F5E2CD] relative overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          
          {/* HEADER SECTION TENTANG KAMI */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#8B3E13] text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#F7E7CE] px-4 py-1.5 rounded-full border border-[#E6C8A2] inline-block shadow-sm">
              Tentang Kami & Cerita Tradisi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1508] mt-4 tracking-tight">
              Merawat Resep Warisan Asli Ponorogo
            </h2>
            <p className="text-[#5C4232] text-sm sm:text-base mt-3 leading-relaxed">
              Kisah di balik kelembutan daging dan bumbu rempah khas yang membuat Sate Mas Yudi selalu dirindukan.
            </p>
          </div>

          {/* GRID TATA LETAK DENGAN HOVER EFFECT INTERAKTIF */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* Kolom Kiri: Narasi Cerita dengan Efek Interaktif */}
            <div className="lg:col-span-7 bg-white border border-[#EADBCC] rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#8B3E13] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8B3E13] uppercase tracking-wider">
                  {/* Bootstrap Icon: bi-bookmark-star-fill */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8 1a1 1 0 0 0-1 1v2.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1"/>
                  </svg>
                  <span>Filosofi Sate Asli Ponorogo</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1C0D05] group-hover:text-[#8B3E13] transition-colors">
                  Bukan Sekadar Sate Biasa, Ini Perjalanan Rasa Turun-Temurun
                </h3>
                <p className="text-sm text-[#5C4232] leading-relaxed">
                  Berbeda dari sate ayam pada umumnya yang dipotong dadu tebal, Sate Ayam Ponorogo Mas Yudi mempertahankan tradisi luhur berupa <strong>teknik sayat pipih memanjang</strong>.
                </p>
                <p className="text-sm text-[#5C4232] leading-relaxed">
                  Teknik fillet ini memungkinkan daging menyerap cairan bumbu marinasi rempah hingga ke serat terdalam sebelum dibakar di atas arang batok kelapa. Hasilnya, daging matang merata tanpa ada bagian luar yang gosong namun bagian dalam masih mentah.
                </p>
              </div>

              <div className="pt-6 border-t border-[#F8EFE5] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C0D05]">
                  {/* Bootstrap Icon: bi-check-lg */}
                  <svg className="w-4 h-4 fill-emerald-600 shrink-0" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <span>Tanpa Lemak Berlebih</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C0D05]">
                  <svg className="w-4 h-4 fill-emerald-600 shrink-0" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <span>Marinasi Rempah Tradisi</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C0D05]">
                  <svg className="w-4 h-4 fill-emerald-600 shrink-0" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <span>Bumbu Kacang Halus</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Kartu Komitmen & Kutipan Mas Yudi */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#2A1508] to-[#1C0D05] rounded-3xl p-6 sm:p-10 text-amber-50 shadow-xl border border-amber-900/40 hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-4xl font-serif mb-3 leading-none select-none">“</div>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed italic mb-6">
                  Kenikmatan sate sejati ada pada kelembutan daging dan kematangan bumbu yang merata. Kami menjaga resep asli keluarga agar setiap gigitan membawa kehangatan Ponorogo langsung ke meja Anda.
                </p>
              </div>

              <div className="border-t border-amber-800/50 pt-5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-amber-200 text-base">Mas Yudi</div>
                  <div className="text-xs text-amber-300/70">Pemilik & Peracik Resep</div>
                </div>
                <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full font-bold">
                  Resep Asli Ponorogo
                </span>
              </div>
            </div>
          </div>

          {/* 4 LANGKAH PROSES AUTENTIK DENGAN HOVER LIFT & BOOTSTRAP ICONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storySteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#F0D5B8] hover:border-[#8B3E13] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5EA] text-[#8B3E13] border border-[#F0D5B8] group-hover:bg-[#8B3E13] group-hover:text-white flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-amber-900/40 group-hover:text-[#8B3E13] transition-colors">
                    Langkah {item.step}
                  </span>
                </div>

                <h4 className="font-bold text-base text-[#1C0D05] mb-2 group-hover:text-[#8B3E13] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B462C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION VARIAN MENU */}
      <MenuPreview />

      {/* SECTION LOKASI */}
      <LocationSection />
    </div>
  );
}
