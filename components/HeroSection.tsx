"use client";

/**
 * HeroSection — Primera impresión visual del negocio.
 * Usa la foto real de los alfajores como fondo.
 */

import Image from "next/image";
import { WA_LINK } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* ── Imagen de fondo (foto real de alfajores) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/alfajores-photo.jpg"
          alt="Alfajores artesanales Hannies recién hechos"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay degradado cálido para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1503]/75 via-[#3D1C02]/65 to-[#2C1503]/88" />
      </div>

      {/* ── Contenido principal ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-2xl mx-auto">

        {/* Logo */}
        <div className="mb-6 w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden bg-[#FFF8F0] shadow-2xl border-2 border-[#C8972A]/40">
          <Image
            src="/logo.jpg"
            alt="Logo Hannies Alfajores"
            fill
            className="object-cover object-center"
            sizes="112px"
            priority
          />
        </div>

        {/* Badge "Artesanal" con icono de estrella */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E0B54C] border border-[#C8972A]/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm bg-[#2C1503]/30">
          <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
          Repostería Artesanal
          <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
        </span>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFF8F0] leading-tight mb-4 drop-shadow-lg">
          El sabor que<br />
          <span className="text-[#E0B54C]">enamora</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base md:text-lg text-[#F5E6C8]/90 font-light leading-relaxed mb-3 max-w-md">
          Alfajores hechos con amor, para los que saben apreciar lo bueno de verdad.
        </p>

        {/* Zona de cobertura */}
        <div className="flex items-center gap-2 text-sm text-[#E0B54C] font-medium mb-10">
          <i className="fi fi-rr-marker text-base leading-none" aria-hidden="true" />
          <span>Servicio exclusivo en <strong>Samborondón</strong> y <strong>Guayaquil</strong></span>
        </div>

        {/* CTA principal */}
        <a
          id="cta-hero-whatsapp"
          href={WA_LINK("¡Hola! Vengo de la página web y quiero hacer un pedido de alfajores 🍪")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gradient-gold text-[#2C1503] font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200"
          aria-label="Pedir ahora por WhatsApp"
        >
          <i className="fi fi-brands-whatsapp text-2xl leading-none" aria-hidden="true" />
          Pedir ahora
        </a>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[#F5E6C8]/50 text-xs animate-bounce">
          <span>Ver más</span>
          <i className="fi fi-rr-angle-small-down text-lg leading-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
