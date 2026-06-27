"use client";

/**
 * ProductsSection — Tarjetas de productos con precios y CTA individual.
 * Usa iconos de Flaticon UIcons en lugar de emojis.
 */

import Image from "next/image";
import { WA_LINK } from "@/lib/constants";

/* ── Datos de los productos ── */
const products = [
  {
    id: "unit",
    icon: "fi fi-rr-cookie",            // Icono: galleta
    label: "Unidad",
    description: "Perfecto para probar y enamorarte.",
    qty: "1 alfajor",
    price: "$2.00",
    badge: null,
    waMessage:
      "¡Hola! Vengo de la página web y quiero pedir 1 alfajor ($2.00)",
  },
  {
    id: "box3",
    icon: "fi fi-rr-gift",              // Icono: regalo
    label: "Cajita x3",
    description: "Ideal para compartir o regalar.",
    qty: "3 alfajores",
    price: "$5.50",
    badge: "Más pedido",
    waMessage:
      "¡Hola! Vengo de la página web y quiero pedir la cajita de 3 alfajores ($5.50)",
  },
  {
    id: "box6",
    icon: "fi fi-rr-box-open",          // Icono: caja abierta
    label: "Cajita x6",
    description: "El regalo perfecto para toda ocasión.",
    qty: "6 alfajores",
    price: "$10.00",
    badge: "Mejor valor",
    waMessage:
      "¡Hola! Vengo de la página web y quiero pedir la cajita de 6 alfajores ($10.00)",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="py-20 px-6 bg-[#FFF8F0]"
      aria-label="Sección de productos y precios"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Encabezado ── */}
        <div className="text-center mb-4 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C8972A]">
            <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
            Lo que ofrecemos
            <i className="fi fi-sr-star text-[10px]" aria-hidden="true" />
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3D1C02] mb-3 reveal">
          Nuestros Alfajores
        </h2>

        <p className="text-center text-[#7B3F00]/80 max-w-xl mx-auto mb-4 reveal text-sm md:text-base">
          Elaborados artesanalmente con ingredientes de primera calidad.
          Cada mordida es una experiencia de sabor genuino.
        </p>

        {/* Nota de peso neto con icono de báscula */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-[#F5E6C8] border border-[#C8972A]/30 rounded-full px-5 py-2">
            <i className="fi fi-rr-scale text-[#C8972A] text-base leading-none" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#7B3F00]">
              Peso neto aprox: <span className="font-bold text-[#3D1C02]">60g</span> por unidad
            </p>
          </div>
        </div>

        {/* ── Imagen de productos ── */}
        <div className="relative w-full h-52 md:h-72 rounded-3xl overflow-hidden mb-14 shadow-2xl reveal">
          <Image
            src="/products-alfajores.png"
            alt="Presentaciones de alfajores Hannies: unidad, cajita x3 y cajita x6"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1503]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[#F5E6C8] text-sm font-semibold tracking-wide drop-shadow">
              Rellenos de dulce de leche cremoso · Cubiertos de azúcar impalpable
            </p>
          </div>
        </div>

        {/* ── Cards de productos ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              id={`product-${product.id}`}
              className="relative bg-[#FFF8F0] border border-[#F5E6C8] rounded-3xl p-7 flex flex-col items-center text-center shadow-md card-lift reveal"
              aria-label={`Producto: ${product.label}`}
            >
              {/* Badge especial */}
              {product.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-gold text-[#2C1503] text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                  {product.badge}
                </span>
              )}

              {/* Icono del producto */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F5E6C8] mb-4 mt-2">
                <i className={`${product.icon} text-3xl text-[#7B3F00] leading-none`} aria-hidden="true" />
              </div>

              {/* Badge artesanal */}
              <span className="text-[10px] uppercase tracking-widest text-[#C8972A] font-semibold mb-2">
                Artesanal
              </span>

              {/* Título */}
              <h3 className="text-2xl font-bold text-[#3D1C02] mb-1">{product.label}</h3>

              {/* Cantidad */}
              <p className="text-xs text-[#7B3F00]/60 font-medium mb-3">{product.qty}</p>

              {/* Descripción */}
              <p className="text-sm text-[#7B3F00]/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Separador decorativo */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C8972A] to-transparent mb-6" />

              {/* Precio */}
              <p className="text-4xl font-extrabold text-[#3D1C02] mb-6 tracking-tight">
                {product.price}
              </p>

              {/* CTA individual */}
              <a
                id={`cta-${product.id}`}
                href={WA_LINK(product.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3D1C02] hover:bg-[#7B3F00] text-[#F5E6C8] font-semibold text-sm py-3 px-6 rounded-full transition-colors duration-200"
                aria-label={`Pedir ${product.label} por WhatsApp`}
              >
                <i className="fi fi-brands-whatsapp text-base leading-none" aria-hidden="true" />
                Pedir esta opción
              </a>
            </article>
          ))}
        </div>

        {/* Nota artesanal con icono de corazón */}
        <div className="flex items-center justify-center gap-2 mt-10 reveal">
          <i className="fi fi-rr-heart text-[#C8972A] text-sm leading-none" aria-hidden="true" />
          <p className="text-center text-xs text-[#7B3F00]/50">
            Elaborados por manos artesanales con ingredientes frescos · Sin conservantes
          </p>
          <i className="fi fi-rr-heart text-[#C8972A] text-sm leading-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
