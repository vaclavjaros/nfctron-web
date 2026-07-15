'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container-fluid flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="text-primary-600">⚡</span>
          <span>NFCtron</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/for-organizers" className="text-gray-600 hover:text-primary-600 transition">
            Pořadatelé
          </Link>
          <Link href="/for-retailers" className="text-gray-600 hover:text-primary-600 transition">
            Prodejci
          </Link>
          <Link href="/case-studies" className="text-gray-600 hover:text-primary-600 transition">
            Reference
          </Link>
          <Link href="/partners" className="text-gray-600 hover:text-primary-600 transition">
            Partneři
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost">Přihlášení</button>
          <button className="btn-primary">Poptat řešení</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-fluid py-4 flex flex-col gap-4">
            <Link href="/for-organizers" className="text-gray-600 hover:text-primary-600">
              Pořadatelé
            </Link>
            <Link href="/for-retailers" className="text-gray-600 hover:text-primary-600">
              Prodejci
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-primary-600">
              Reference
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-primary-600">
              Partneři
            </Link>
            <hr className="my-2" />
            <button className="w-full btn-secondary">Přihlášení</button>
            <button className="w-full btn-primary">Poptat řešení</button>
          </div>
        </div>
      )}
    </header>
  );
}
