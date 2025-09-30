import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Amber + Vanilla',
    notes: 'Amber, vanilla, tonka',
    price: 28,
    tag: 'Best Seller',
    tone: 'from-amber-100 to-rose-100',
  },
  {
    id: 2,
    name: 'Citrus Grove',
    notes: 'Grapefruit, bergamot, neroli',
    price: 26,
    tag: 'New',
    tone: 'from-orange-100 to-yellow-100',
  },
  {
    id: 3,
    name: 'Forest Calm',
    notes: 'Cedar, pine, moss',
    price: 26,
    tag: '',
    tone: 'from-emerald-100 to-lime-100',
  },
  {
    id: 4,
    name: 'Lavender Haze',
    notes: 'Lavender, clary sage, musk',
    price: 24,
    tag: '',
    tone: 'from-violet-100 to-indigo-100',
  },
  {
    id: 5,
    name: 'Ocean Linen',
    notes: 'Sea salt, linen, driftwood',
    price: 26,
    tag: '',
    tone: 'from-sky-100 to-cyan-100',
  },
  {
    id: 6,
    name: 'Spiced Chai',
    notes: 'Cardamom, clove, vanilla',
    price: 28,
    tag: 'Seasonal',
    tone: 'from-rose-100 to-amber-100',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="border-t border-neutral-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Shop our favorites
            </h2>
            <p className="mt-2 text-neutral-600">
              Clean-burning soy candles hand-poured in small batches.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            <Star size={16} className="text-amber-600" /> Our best-sellers
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${p.tone}`}>
                {p.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white">
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 flex items-end justify-center p-6">
                  <div className="relative h-28 w-24">
                    <div className="absolute inset-x-3 bottom-2 h-24 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur" />
                    <div className="absolute left-1/2 top-3 h-4 w-[2px] -translate-x-1/2 rounded bg-neutral-800" />
                    <div className="absolute left-1/2 top-2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.notes}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">${p.price}.00</span>
                  <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
