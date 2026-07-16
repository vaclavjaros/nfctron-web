"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ErrorPageContent } from "./copy";

interface ErrorPageProps {
  code: "404" | "500";
  locale: Locale;
  content: ErrorPageContent;
  onRetry?: () => void;
}

export default function ErrorPage({
  code,
  locale,
  content,
  onRetry,
}: ErrorPageProps) {
  const supportUrl = "https://tickets.nfctron.com/receipt";

  return (
    <main className="flex min-h-screen flex-col bg-white text-primary-900">
      <header className="border-b border-gray-200/80">
        <div className="container-fluid flex h-16 items-center justify-between">
          <Link href="/" aria-label="NFCtron">
            <Image
              src="/nfctron-logo-dark.svg"
              alt="NFCtron"
              width={86}
              height={16}
              priority
            />
          </Link>
          <span className="text-[10px] font-medium text-gray-400">{code}</span>
        </div>
      </header>

      <section className="container-fluid flex flex-1 items-start py-16 sm:items-center sm:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              NFCtron · {content.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {onRetry ? (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex h-9 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
                >
                  {content.primaryAction} <span aria-hidden="true">↻</span>
                </button>
              ) : (
                <Link
                  href="/"
                  className="inline-flex h-9 items-center gap-5 rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
                >
                  {content.primaryAction} <span aria-hidden="true">→</span>
                </Link>
              )}
              <a
                href={onRetry ? "/" : supportUrl}
                className="inline-flex h-9 items-center rounded-full border border-gray-200 bg-white px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
              >
                {content.secondaryAction}
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="relative hidden lg:block">
            <div className="aspect-square rounded-full bg-primary-50" />
            <div className="absolute inset-[14%] flex items-center justify-center rounded-full border border-primary-100 bg-white text-[clamp(5rem,11vw,9rem)] font-semibold tracking-[-0.08em] text-primary-700 shadow-xl shadow-primary-900/5">
              {code}
            </div>
          </div>
        </div>
      </section>

      <footer className="container-fluid flex h-14 items-center justify-between gap-4 border-t border-gray-200 text-[10px] text-gray-400">
        <span>© {new Date().getFullYear()} NFCtron</span>
        <span className="text-right">
          {locale === "cs" ? "Akce bez starostí." : "Effortless events."}
        </span>
      </footer>
    </main>
  );
}
