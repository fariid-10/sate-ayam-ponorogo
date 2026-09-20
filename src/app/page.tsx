import WhyUs from "@/components/WhyUs";
import MenuPreview from "@/components/MenuPreview";
export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section 
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
            SATE AYAM PONOROGO MAS YUDI
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto drop-shadow">
            Diolah dengan rempah-rempah khusus sehingga mempunyai cita rasa khas yang gurih dan autentik.
          </p>
        </div>
      </section>

      {/* SECTION KEUNGGULAN (WHY US) */}
      <WhyUs />
      <MenuPreview/>
    </div>
  );
}