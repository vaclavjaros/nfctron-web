export default function Hero() {
  return (
    <section className="section pt-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ Nová generace event infrastruktury
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Infrastruktura pro pořadatele <span className="text-primary-600">akcí</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Platby, vstupenky, data a provoz v jednom ekosystému. Vše, co potřebuješ pro moderní akce.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="btn-primary text-lg">
                Poptat řešení
              </button>
              <button className="btn-secondary text-lg">
                Ukázat NFCtron Hub
              </button>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              ✓ Používáno na 500+ akcích • ✓ 10M+ transakcí ročně • ✓ Trusted by Live Nation
            </p>
          </div>

          {/* Right - Visual */}
          <div className="relative h-96 md:h-full rounded-2xl bg-gradient-to-tr from-primary-200 to-accent-200 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="inline-block">
                <div className="text-6xl mb-4">🎪</div>
                <p className="text-gray-700 font-semibold">NFCtron Hub</p>
                <p className="text-sm text-gray-600">Real-time analytics & operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
