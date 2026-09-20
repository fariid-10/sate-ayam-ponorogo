import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1C0D05] via-[#2A1508] to-[#7e411b] text-amber-100/90 pt-16 pb-8 border-t border-amber-900/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
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
              {["Home", "About Us", "Menu Utama", "Hubungi Kami"].map((item, idx) => {
                const links = ["/", "/about", "/menu", "/contact"];
                return (
                  <li key={idx}>
                    <Link 
                      href={links[idx]} 
                      className="inline-flex items-center gap-2 text-amber-100/80 hover:text-amber-300 transition-colors duration-200 group"
                    >
                      <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-3 group-hover:ml-0">
                        ›
                      </span>
                      {item}
                    </Link>
                  </li>
                );
              })}
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
                <span className="p-2 bg-amber-900/30 rounded-lg text-amber-300 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </span>
                <span>Perum. Grand Mansion B4 No.50 Kalipuro, Pungging, Mojosari, Mojokerto, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-amber-900/30 rounded-lg text-amber-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </span>
                <span>+62 858-5012-5627</span>
                {/* <span>+62 857-0728-0798</span> */}
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