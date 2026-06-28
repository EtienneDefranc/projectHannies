"use client";

/**
 * FooterSection — Pie de página con información de contacto,
 * enlace a Instagram y copyright.
 * Usa iconos de Flaticon UIcons en lugar de emojis.
 */

import Image from "next/image";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-[#2C1503] text-[#F5E6C8] py-16 px-6"
      aria-label="Pie de página y contacto"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

        {/* ── Logo / Nombre ── */}
        <div className="reveal flex flex-col items-center gap-3">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#C8972A]/40 shadow-xl">
            <Image
              src="/logo.jpg"
              alt="Logo Hannies Alfajores"
              fill
              className="object-cover object-center"
              sizes="80px"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8972A] mb-1 font-semibold">
              Repostería Artesanal
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
              Hannies
            </h2>
            <p className="text-[#F5E6C8]/60 text-sm mt-1">
              Hecho con amor, para los que aprecian lo bueno de verdad.
            </p>
          </div>
        </div>

        {/* ── Separador decorativo ── */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C8972A] to-transparent reveal" />

        {/* ── Redes sociales ── */}
        <div className="reveal">
          {/* Descripción con icono de cámara (Flaticon) */}
          <div className="flex items-center justify-center gap-2 text-sm text-[#F5E6C8]/70 mb-5">
            <i className="fi fi-rr-camera text-base text-[#C8972A] leading-none" aria-hidden="true" />
            <span>Síguenos en Instagram para ver nuestros productos diarios</span>
          </div>

          <a
            id="instagram-link"
            href="https://www.instagram.com/by.hannies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de Instagram de Hannies"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            {/* Icono de Instagram de Flaticon Brands */}
            <i className="fi fi-brands-instagram text-lg leading-none" aria-hidden="true" />
            @by.hannies
          </a>
        </div>

        {/* ── Contacto WhatsApp ── */}
        <div className="reveal flex flex-col items-center gap-3">
          {/* Descripción con icono de mensaje (Flaticon) */}
          <div className="flex items-center justify-center gap-2 text-sm text-[#F5E6C8]/70">
            <i className="fi fi-rr-comment-alt text-base text-[#C8972A] leading-none" aria-hidden="true" />
            <span>¿Listo para pedir? Estamos a un mensaje de distancia.</span>
          </div>

          <a
            id="footer-whatsapp"
            href="https://wa.me/593983345792?text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20quiero%20hacer%20un%20pedido%20de%20alfajores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/10 text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            <i className="fi fi-brands-whatsapp text-base leading-none" aria-hidden="true" />
            +593 98 334 5792
          </a>
        </div>

        {/* ── Separador ── */}
        <div className="w-full border-t border-[#7B3F00]/30" />

        {/* ── Copyright ── */}
        <p className="text-[#F5E6C8]/30 text-xs reveal">
          © {year} Hannies · Repostería Artesanal · Samborondón, Ecuador.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
