import React, { useState } from 'react';
import { Flame, ShoppingCart, Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
            <Flame size={18} />
          </span>
          <span className="font-semibold tracking-tight">Aurelia Candles</span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          <NavLink href="#shop">Shop</NavLink>
          <NavLink href="#story">Our Story</NavLink>
          <NavLink href="#sustainability">Sustainability</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800"
            aria-label="View cart"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Cart</span>
          </button>

          <button
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            <NavLink href="#shop">Shop</NavLink>
            <NavLink href="#story">Our Story</NavLink>
            <NavLink href="#sustainability">Sustainability</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
