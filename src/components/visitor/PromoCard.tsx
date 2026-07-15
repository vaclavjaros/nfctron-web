import Image from "next/image";
import type { PromoItem, Translator } from "./types";

export default function PromoCard({
  item,
  t,
  year = false,
}: {
  item: PromoItem;
  t: Translator;
  year?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5">
      <div
        className={`relative flex aspect-[16/8] items-end overflow-hidden bg-gradient-to-br ${item.accent} p-5`}
      >
        {item.image && (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="relative text-xs font-bold uppercase tracking-[.14em] text-white/80">
          {t(year ? "V prodeji na rok 2027" : "Sériová akce")}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-primary-900">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{t(item.meta)}</p>
        </div>
        <button className="shrink-0 rounded-full border border-primary-300 px-4 py-2 text-xs font-medium text-primary-700 transition hover:bg-primary-50">
          {t(item.action ?? "Detail akce")}
        </button>
      </div>
    </article>
  );
}
