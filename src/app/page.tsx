import Link from "next/link";
import WhyUs from "@/components/WhyUs";
import MenuPreview from "@/components/MenuPreview";
import LocationSection from "@/components/LocationSection";


export default function Home() {
  return (
    <div>
      {/* HERO SECTION DENGAN ID "hero" */}
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      >
        {/* Dark Overlay agar teks kontras dan terbaca jelas */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Konten Hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20 flex flex-col items-center">
          
          <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-black/40 px-4 py-1.5 rounded-full border border-amber-500/30 mb-4 backdrop-blur-sm">
            Cita Rasa Autentik Ponorogo
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-md mb-6">
            Sate Ayam Ponorogo <br />
            <span className="text-amber-400">Mas Yudi</span>
          </h1>

          <p className="text-base sm:text-xl text-amber-100/90 max-w-2xl leading-relaxed drop-shadow-sm mb-8">
            Daging dipotong pipih memanjang khas Ponorogo, diolah dengan racikan bumbu rempah khusus keluarga dan bumbu kacang gurih yang autentik.
          </p>

          {/* HANYA 1 TOMBOL CALL TO ACTION */}
          <div className="flex justify-center">
            <Link
              href="#menu"
              className="bg-[#FFF8E7] text-[#2A1508] hover:bg-[#F5E6C8] px-9 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Lihat Menu
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION KEUNGGULAN (WHY US) */}
      <WhyUs />

      {/* SECTION VARIAN MENU */}
      <MenuPreview />
      

      {/* SECTION LOKASI */}
      <LocationSection/>
    </div>
  );
}