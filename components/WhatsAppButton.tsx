"use client";

/**
 * WhatsAppButton — Botón flotante de WhatsApp visible en toda la página.
 * Usa el icono oficial de Flaticon UIcons Brands.
 */

import { WA_LINK } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      id="whatsapp-floating-btn"
      href={WA_LINK("¡Hola! Vengo de la página web y quiero hacer un pedido de alfajores")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para hacer un pedido"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl wa-pulse hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      {/* Icono de WhatsApp de Flaticon Brands */}
      <i className="fi fi-brands-whatsapp text-3xl leading-none" aria-hidden="true" />
      <span className="sr-only">Pedir por WhatsApp</span>
    </a>
  );
}
