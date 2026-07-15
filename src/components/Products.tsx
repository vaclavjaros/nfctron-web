interface Product {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: '💳',
    title: 'Platební systém',
    description: 'Cashless řešení pro bezpečné a rychlé transakce na akcích.',
    features: ['QR code platby', 'RFID wristbands', 'Real-time settlement'],
  },
  {
    icon: '🎫',
    title: 'Ticketing',
    description: 'Komplexní řešení pro prodej a správu vstupenek.',
    features: ['Dynamic pricing', 'Ticket verification', 'Multi-channel sales'],
  },
  {
    icon: '📊',
    title: 'NFCtron Hub',
    description: 'Real-time analytika a operační dashboard pro pořadatele.',
    features: ['Live analytics', 'Visitor insights', 'Revenue tracking'],
  },
  {
    icon: '🛒',
    title: 'Marketplace',
    description: 'Integrovaný obchod pro prodej a merchandising.',
    features: ['Point of sale', 'Inventory management', 'Multi-vendor support'],
  },
  {
    icon: '📱',
    title: 'Nautilus / SoftPOS',
    description: 'Mobilní řešení pro přenosné platby a prodej.',
    features: ['Offline mode', 'Tablet compatible', 'Wireless terminals'],
  },
  {
    icon: '⚙️',
    title: 'API & Integrace',
    description: 'Robustní infrastruktura pro integraci s vašimi systémy.',
    features: ['REST API', 'Webhooks', 'Developer docs'],
  },
];

export default function Products() {
  return (
    <section className="section bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="section-title">Naše produkty</h2>
          <p className="section-subtitle">
            Kompletní sada nástrojů pro moderní event management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-primary-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
