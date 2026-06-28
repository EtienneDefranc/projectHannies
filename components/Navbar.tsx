"use client";

/**
 * Navbar — Barra de navegación fija en la parte superior.
 * Con scroll, adquiere fondo sólido. En mobile incluye menú hamburguesa.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK } from "@/lib/constants";


const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Envíos",    href: "#envios" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#2C1503]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        {/* ── Logo con imagen ── */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C8972A]/40 flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Logo Hannies"
              fill
              className="object-cover object-center"
              sizes="36px"
            />
          </div>
          <span className="text-xl font-extrabold text-[#FFF8F0] tracking-tight group-hover:text-[#E0B54C] transition-colors duration-200">
            Hannies<span className="text-[#C8972A]">.</span>
          </span>
        </a>

        {/* ── Links desktop ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#F5E6C8]/80 hover:text-[#E0B54C] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA desktop ── */}
        <a
          href={WA_LINK("¡Hola! Vengo de la página web y quiero hacer un pedido de alfajores 🍪")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 gradient-gold text-[#2C1503] font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-200"
          aria-label="Pedir ahora por WhatsApp"
        >
          <i className="fi fi-brands-whatsapp text-base leading-none" aria-hidden="true" />
          Pedir ahora
        </a>

        {/* ── Hamburguesa mobile ── */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#F5E6C8] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5E6C8] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5E6C8] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* ── Menú mobile desplegable ── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#2C1503]/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col items-center gap-1 py-6 px-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-center text-[#F5E6C8]/90 hover:text-[#E0B54C] font-medium py-3 text-base transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="w-full pt-2">
            <a
              href={WA_LINK("¡Hola! Vengo de la página web y quiero hacer un pedido de alfajores 🍪")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center gradient-gold text-[#2C1503] font-bold py-3 rounded-full"
            >
              Pedir ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
