export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-fluid text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Připraveni začít?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Pojďme si promluvit o tom, jak NFCtron může zlepšit vaše akce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Poptat демонстрaci
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
            Rezervace call
          </button>
        </div>

        <p className="text-sm text-primary-100 mt-8">
          Obvykla odezva během 24 hodin. Bez povinností.
        </p>
      </div>
    </section>
  );
}
