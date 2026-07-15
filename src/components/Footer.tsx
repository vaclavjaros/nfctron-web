import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-fluid">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">NFCtron</h3>
            <p className="text-gray-400 text-sm">
              Infrastruktura pro moderní akce. Platby, vstupenky, data a provoz v jednom ekosystému.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produkty</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#payments" className="hover:text-white transition">Platby</Link></li>
              <li><Link href="#ticketing" className="hover:text-white transition">Vstupenky</Link></li>
              <li><Link href="#hub" className="hover:text-white transition">NFCtron Hub</Link></li>
              <li><Link href="#marketplace" className="hover:text-white transition">Marketplace</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Řešení</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/for-organizers" className="hover:text-white transition">Pořadatelé</Link></li>
              <li><Link href="/for-retailers" className="hover:text-white transition">Prodejci</Link></li>
              <li><Link href="/for-visitors" className="hover:text-white transition">Návštěvníci</Link></li>
              <li><Link href="/partners" className="hover:text-white transition">Partneři</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Právní</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition">Ochrana osobních údajů</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Podmínky použití</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition">Cookies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NFCtron. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#twitter" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#linkedin" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#github" className="text-gray-400 hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
