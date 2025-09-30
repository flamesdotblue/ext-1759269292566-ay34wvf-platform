import React from 'react';
import { Flame, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
              <Flame size={18} />
            </span>
            <span className="font-semibold tracking-tight">Aurelia Candles</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-neutral-600">
            Thoughtfully crafted candles for everyday rituals. Clean ingredients, cozy moments.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Social href="#" label="Instagram">
              <Instagram size={16} />
            </Social>
            <Social href="#" label="Twitter">
              <Twitter size={16} />
            </Social>
            <Social href="mailto:hello@aureliacandles.com" label="Email">
              <Mail size={16} />
            </Social>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a className="hover:text-neutral-900" href="#shop">All candles</a></li>
            <li><a className="hover:text-neutral-900" href="#">Best sellers</a></li>
            <li><a className="hover:text-neutral-900" href="#">Gift sets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a className="hover:text-neutral-900" href="#story">Our story</a></li>
            <li><a className="hover:text-neutral-900" href="#sustainability">Sustainability</a></li>
            <li><a className="hover:text-neutral-900" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Aurelia Candles. All rights reserved.</p>
          <p>
            Clean-burning soy wax • Natural fragrances • Small batch
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
    >
      {children}
    </a>
  );
}
