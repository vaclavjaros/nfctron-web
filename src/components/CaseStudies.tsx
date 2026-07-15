interface CaseStudy {
  logo: string;
  company: string;
  event: string;
  metrics: { label: string; value: string }[];
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    logo: '🎸',
    company: 'Rock for People',
    event: 'Festival 2024',
    metrics: [
      { label: 'Transakcí', value: '500K+' },
      { label: 'Návštěvníků', value: '250K' },
      { label: 'Zajišťovací doba', value: '< 2h' },
    ],
    description: 'Úplně cashless festival s 250k návštěvníků. Nejrychlejší settlement v historii.',
  },
  {
    logo: '🎭',
    company: 'Live Nation',
    event: 'Tour 2024',
    metrics: [
      { label: 'Míst', value: '50+' },
      { label: 'Prodaných vstupenek', value: '2M+' },
      { label: 'Dostupnost', value: '99.99%' },
    ],
    description: 'Globální tour s 50+ destinacemi. Unified ticketing a platby.',
  },
  {
    logo: '🏟️',
    company: 'Hallové arény',
    event: 'Eventy celoročně',
    metrics: [
      { label: 'Akcí/rok', value: '200+' },
      { label: 'Průměr visitors/event', value: '3K' },
      { label: 'Margin zlepšení', value: '+25%' },
    ],
    description: 'Komplexní řešení pro hallové provozovatele. Zvýšení příjmů z merchandisingu.',
  },
];

export default function CaseStudies() {
  return (
    <section className="section bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="section-title">Reference a případové studie</h2>
          <p className="section-subtitle">
            Jak NFCtron pomáhá největším pořadatelům akcí
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{study.logo}</div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {study.company}
              </h3>
              <p className="text-sm text-gray-600 mb-6 border-b pb-4">
                {study.event}
              </p>

              <p className="text-gray-600 text-sm mb-6">
                {study.description}
              </p>

              <div className="space-y-3">
                {study.metrics.map((metric, midx) => (
                  <div key={midx} className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">{metric.label}</span>
                    <span className="font-bold text-primary-600">{metric.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 btn-secondary">
                Přečíst studii
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/case-studies" className="btn-primary inline-block">
            Zobrazit všechny reference →
          </a>
        </div>
      </div>
    </section>
  );
}
