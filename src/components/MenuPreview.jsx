// components/MenuPreview.jsx
import Link from "next/link";

export default function MenuPreview() {
  const menuList = [
    {
      id: 1,
      name: "Sate Daging Full",
      description: "100% daging ayam murni tanpa lemak, dipotong pipih memanjang khas Ponorogo yang empuk.",
      badge: "Full Daging",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Sate Kulit",
      description: "Tusukan full kulit ayam pilihan dengan tekstur kenyal-gurih dan bumbu yang meresap.",
      badge: "Full Kulit",
      tag: "Favorit",
    },
    {
      id: 3,
      name: "Sate Jeroan",
      description: "Tusukan khusus jeroan (hati & ampela) yang diolah higienis, gurih, dan bebas bau amis.",
      badge: "Full Jeroan",
      tag: "Khas",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF8E7]/50 border-t border-[#F0E2D0]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#B85B14] text-xs font-bold tracking-widest uppercase bg-[#F7E7CE]/60 px-3 py-1 rounded-full border border-[#E6C8A2]">
            Varian Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-[#2A1508]">
            Pilihan Varian Sate
          </h2>
          <p className="text-[#664630] text-sm sm:text-base mt-2">
            Setiap porsi disajikan terpisah sesuai selera varian favoritmu!
          </p>
        </div>

        {/* GRID KARTU MENU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuList.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#F0E2D0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#8B4513] text-white">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-[#B85B14] bg-[#FFF5E6] px-2.5 py-1 rounded-full border border-[#F0D5B8]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2A1508] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5C4232] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F7E7CE] flex justify-between items-center">
                <span className="text-xs font-medium text-[#8B4513]">
                  Disajikan Terpisah
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#2A1508] hover:text-[#B85B14] flex items-center gap-1"
                >
                  Pesan <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}