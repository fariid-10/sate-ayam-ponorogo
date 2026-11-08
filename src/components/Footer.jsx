import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1C0D05] via-[#2A1508] to-[#7e411b] text-amber-100/90 pt-16 pb-8 border-t border-amber-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        
        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-amber-900/40">
          
          {/* BRAND / LOGO & DESKRIPSI */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Sate Ayam Ponorogo Mas Yudi"
                width={200}
                height={70}
                className="object-contain drop-shadow-md w-auto h-14"
              />
            </Link>
            {/* DESKRIPSI DENGAN TAMBAHAN REMPAH-REMPAH KHUSUS */}
            <p className="text-sm leading-relaxed text-amber-200/80">
              Sate ayam khas Ponorogo dengan daging empuk pilihan, diolah dengan rempah-rempah khusus sehingga mempunyai cita rasa khas dan autentik.
            </p>
          </div>

          {/* NAVIGASI CEPAT */}
          <div>
            <h3 className="text-base font-semibold text-amber-300 tracking-wider uppercase mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/#hero" },
                { name: "Tentang Kami", href: "/#about" },
                { name: "Pilihan Menu", href: "/#menu" },
                { name: "Lokasi & Kontak", href: "/#lokasi" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center gap-2 text-amber-100/80 hover:text-amber-300 transition-colors duration-200 group"
                  >
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-3 group-hover:ml-0">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* JAM OPERASIONAL */}
          <div>
            <h3 className="text-base font-semibold text-amber-300 tracking-wider uppercase mb-5">
              Jam Operasional
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/80">
              <li className="flex justify-between items-center bg-amber-950/40 px-3.5 py-2.5 rounded-lg border border-amber-900/30">
                <span>Pagi</span>
                <span className="font-semibold text-amber-200">08.00 - 17.00 </span>
              </li>
              <li className="flex justify-between items-center bg-amber-950/40 px-3.5 py-2.5 rounded-lg border border-amber-900/30">
                <span>Malam</span>
                <span className="font-semibold text-amber-200">17.00 - 22.00</span>
              </li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="text-base font-semibold text-amber-300 tracking-wider uppercase mb-5">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/80">
              <li className="flex items-start gap-3">
                <span className="p-2 bg-amber-900/30 rounded-lg text-amber-300 mt-0.5 shrink-0">
                  {/* Bootstrap Icon: bi-geo-alt-fill */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                </span>
                <span>Perum. Grand Mansion B4 No.50 Kalipuro, Pungging, Mojosari, Mojokerto, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-amber-900/30 rounded-lg text-emerald-400 shrink-0">
                  {/* Bootstrap Icon: bi-whatsapp */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.016-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </span>
                <a
                  href="https://wa.me/6285850125627?text=Halo%20Mas%20Yudi,%20saya%20mau%20pesan%20Sate%20Ayam%20Ponorogo%20dari%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  +62 858-5012-5627
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center text-xs text-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sate Ayam Ponorogo Mas Yudi. All Rights Reserved.</p>
          <p className="text-amber-200/40">Dibuat dengan rasa & kehangatan.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;