import React from 'react';
import { Sparkles, Leaf, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            <Sparkles size={14} /> Hand-poured luxury
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Candles that make spaces feel like home
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Crafted with clean-burning soy wax, natural cotton wicks, and thoughtfully blended fragrances. Transform your rituals with soft light and soothing scents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow hover:bg-neutral-800"
            >
              Shop candles
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Learn more
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Feature icon={Leaf} label="Soy wax" />
            <Feature icon={Shield} label="Non-toxic" />
            <Feature icon={Truck} label="Free shipping $50+" />
            <Feature icon={Sparkles} label="Long burn" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-200/60 blur-2xl" />
          <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-rose-200/60 blur-2xl" />

          <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-lg backdrop-blur">
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-neutral-100 via-amber-50 to-rose-50 p-6">
              <div className="flex h-full w-full items-end justify-center">
                <CandleMockup />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-base font-semibold">Signature Amber + Vanilla</h3>
              <p className="text-sm text-neutral-600">Warm, cozy, and calm. 50 hr burn time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800">
      <Icon size={16} className="text-amber-600" />
      <span>{label}</span>
    </div>
  );
}

function CandleMockup() {
  return (
    <div className="relative w-40">
      <div className="mx-auto h-48 w-36 rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm" />
      <div className="absolute inset-x-0 -top-2 mx-auto h-3 w-28 rounded-t-md bg-neutral-100" />
      <div className="absolute left-1/2 top-2 h-6 w-[2px] -translate-x-1/2 rounded bg-neutral-800" />
      <div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-500 shadow-[0_0_20px_6px_rgba(245,158,11,0.6)]" />
    </div>
  );
}
