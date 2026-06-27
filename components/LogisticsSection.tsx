"use client";

/**
 * LogisticsSection — FAQ sobre envíos, tiempos y métodos de pago.
 * Usa iconos de Flaticon UIcons en lugar de emojis.
 */

import { useState } from "react";

/* ── Datos del FAQ ── */
const faqs = [
  {
    id: "zones",
    icon: "fi fi-rr-marker",              // Marcador de ubicación
    question: "¿A qué zonas realizan entregas?",
    answer:
      "Realizamos entregas a domicilio en toda la zona de Samborondón (La Puntilla, Altamira, Ciudad Celeste, Urb. Alejandría, etc.) y en sectores de Guayaquil. Si tienes dudas sobre tu zona, ¡escríbenos y lo verificamos de inmediato!",
  },
  {
    id: "timing",
    icon: "fi fi-rr-clock",               // Reloj
    question: "¿Con cuánta anticipación debo hacer mi pedido?",
    answer:
      "Recomendamos hacer tu pedido con mínimo 24 horas de anticipación para asegurar la frescura de los alfajores y garantizar disponibilidad. Para pedidos grandes (más de 12 unidades), pedimos 48 horas de anticipación.",
  },
  {
    id: "payment",
    icon: "fi fi-rr-credit-card",         // Tarjeta de crédito
    question: "¿Cómo puedo pagar mi pedido?",
    answer:
      "Aceptamos transferencias bancarias (Banco Pichincha, Banco Guayaquil), pago móvil y efectivo contra entrega. Una vez confirmado tu pedido por WhatsApp, te enviamos los datos para la transferencia.",
  },
  {
    id: "delivery-time",
    icon: "fi fi-rr-truck-side",          // Camión de entrega
    question: "¿Cuánto tiempo tarda la entrega?",
    answer:
      "El tiempo de entrega es de 30 a 60 minutos dependiendo de tu ubicación. Para pedidos fuera de nuestra zona habitual, coordinamos una hora de entrega específica al momento de confirmar tu pedido.",
  },
  {
    id: "freshness",
    icon: "fi fi-rr-leaf",                // Hoja (frescura)
    question: "¿Cuánto tiempo duran los alfajores?",
    answer:
      "Nuestros alfajores son completamente frescos y artesanales. Se mantienen en óptimas condiciones durante 3-5 días guardados en un lugar fresco y seco (no en refrigerador). ¡Aunque difícilmente duran tanto!",
  },
];

export default function LogisticsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="envios"
      className="py-20 px-6 gradient-choco"
      aria-label="Sección de logística y envíos"
    >
      <div className="max-w-3xl mx-auto">

        {/* ── Encabezado ── */}
        <div className="text-center mb-4 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C8972A]">
            <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
            Preguntas frecuentes
            <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FFF8F0] mb-3 reveal">
          Envíos y Pedidos
        </h2>

        <p className="text-center text-[#F5E6C8]/70 mb-14 text-sm md:text-base reveal">
          Todo lo que necesitas saber antes de pedir tus alfajores.
        </p>

        {/* ── Acordeón de FAQ ── */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-${faq.id}`}
                className="rounded-2xl overflow-hidden border border-[#7B3F00]/40 reveal"
              >
                {/* Botón de pregunta */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center gap-4 text-left px-6 py-5 bg-[#3D1C02]/60 hover:bg-[#3D1C02]/80 transition-colors duration-200 group"
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                >
                  {/* Icono de categoría (Flaticon) */}
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-[#C8972A]/20">
                    <i className={`${faq.icon} text-lg text-[#E0B54C] leading-none`} aria-hidden="true" />
                  </span>

                  <span className="flex-1 text-base font-semibold text-[#FFF8F0]">
                    {faq.question}
                  </span>

                  {/* Chevron animado (Flaticon) */}
                  <i
                    className={`fi fi-rr-angle-small-down text-xl text-[#C8972A] flex-shrink-0 transition-transform duration-300 leading-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Respuesta con transición */}
                <div
                  id={`answer-${faq.id}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-4 bg-[#2C1503]/40">
                    <p className="text-[#F5E6C8]/85 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA de contacto directo ── */}
        <div className="mt-14 text-center reveal">
          <p className="text-[#F5E6C8]/70 text-sm mb-4">
            ¿Tienes otra duda? Escríbenos directamente.
          </p>
          <a
            id="cta-logistics-whatsapp"
            href="https://wa.me/593983345792?text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20tengo%20una%20pregunta%20sobre%20los%20env%C3%ADos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C8972A] text-[#E0B54C] hover:bg-[#C8972A]/10 font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-200"
          >
            <i className="fi fi-brands-whatsapp text-base leading-none" aria-hidden="true" />
            Chatear con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
