'use client';

import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: string;
  description: string;
}

const stats: Stat[] = [
  {
    label: 'Akcí ročně',
    value: '500+',
    description: 'Festivaly, haly, konference',
  },
  {
    label: 'Transakcí ročně',
    value: '10M+',
    description: 'Bezpečné cashless platby',
  },
  {
    label: 'Návštěvníků',
    value: '50M+',
    description: 'Globální pokrytí',
  },
  {
    label: 'Zemí',
    value: '15+',
    description: 'Mezinárodní přítomnost',
  },
];

export default function Stats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="section-title">Důkazy místo slov</h2>
          <p className="section-subtitle">
            Reálné čísla od skutečných akcí
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2">
                {isMounted ? stat.value : '0'}
              </div>
              <p className="text-sm font-semibold text-gray-600 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
