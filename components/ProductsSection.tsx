"use client";

/**
 * ProductsSection — Tarjetas de productos generadas dinámicamente
 * desde el catálogo en lib/data/alfajores.ts.
 *
 * Para agregar un nuevo sabor: edita lib/data/alfajores.ts → ALFAJOR_FLAVORS.
 */

import Image from "next/image";
import { WA_LINK } from "@/lib/constants";
import {
  ALFAJOR_FLAVORS,
  PACK_OPTIONS,
  calcPackPrice,
} from "@/lib/data/alfajores";
import type { PackPrice } from "@/lib/data/types";

/* ─── Genera los precios de cada presentación para un sabor ─── */
function buildPackPrices(
  flavor: (typeof ALFAJOR_FLAVORS)[0]
): PackPrice[] {
  return PACK_OPTIONS.map((pack) => {
    const price = calcPackPrice(flavor.pricePerUnit, pack.qty, pack.id);
    const savings =
      Math.round((flavor.pricePerUnit * pack.qty - price) * 100) / 100;
    return {
      packOption: pack,
      price,
      savings,
      waMessage: `¡Hola! Vengo de la página web y quiero pedir ${
        pack.qty === 1
          ? `1 alfajor de ${flavor.name}`
          : `la cajita x${pack.qty} de alfajores de ${flavor.name}`
      } ($${price.toFixed(2)})`,
    };
  });
}

export default function ProductsSection() {
  /* Solo mostramos los sabores disponibles actualmente */
  const available = ALFAJOR_FLAVORS.filter((f) => f.available);
  /* Sabores "próximamente" para la sección de teaser */
  const comingSoon = ALFAJOR_FLAVORS.filter((f) => !f.available);

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

        {/* Nota de peso neto */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-[#F5E6C8] border border-[#C8972A]/30 rounded-full px-5 py-2">
            <i className="fi fi-rr-scale text-[#C8972A] text-base leading-none" aria-hidden="true" />
            <p className="text-sm font-semibold text-[#7B3F00]">
              Peso neto aprox:{" "}
              <span className="font-bold text-[#3D1C02]">60g</span> por unidad
            </p>
          </div>
        </div>

        {/* ── Un bloque por cada sabor disponible ── */}
        {available.map((flavor) => {
          const packs = buildPackPrices(flavor);

          return (
            <div key={flavor.id} className="mb-20">
              {/* Foto real del producto */}
              {flavor.image && (
                <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden mb-10 shadow-2xl reveal">
                  <Image
                    src={flavor.image}
                    alt={`Alfajores de ${flavor.name} — Hannies`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1503]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center w-full px-4">
                    <span className="inline-block bg-[#C8972A]/90 backdrop-blur-sm text-[#FFF8F0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-1">
                      Sabor {flavor.name}
                    </span>
                    <p className="text-[#F5E6C8] text-sm drop-shadow font-light">
                      {flavor.tagline}
                    </p>
                  </div>
                </div>
              )}

              {/* Cards de presentación */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packs.map(({ packOption, price, savings }) => (
                  <article
                    key={packOption.id}
                    id={`product-${flavor.id}-${packOption.id}`}
                    className="relative bg-[#FFF8F0] border border-[#F5E6C8] rounded-3xl p-7 flex flex-col items-center text-center shadow-md card-lift reveal"
                    aria-label={`${packOption.label} de alfajores de ${flavor.name}`}
                  >
                    {/* Badge especial */}
                    {packOption.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-gold text-[#2C1503] text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                        {packOption.badge}
                      </span>
                    )}

                    {/* Icono de la presentación */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F5E6C8] mb-4 mt-2">
                      <i
                        className={`${packOption.flaticon} text-3xl text-[#7B3F00] leading-none`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Badge artesanal + sabor */}
                    <span className="text-[10px] uppercase tracking-widest text-[#C8972A] font-semibold mb-1">
                      Artesanal · {flavor.name}
                    </span>

                    {/* Título presentación */}
                    <h3 className="text-2xl font-bold text-[#3D1C02] mb-1">
                      {packOption.label}
                    </h3>

                    {/* Cantidad */}
                    <p className="text-xs text-[#7B3F00]/60 font-medium mb-3">
                      {packOption.qty === 1
                        ? "1 alfajor"
                        : `${packOption.qty} alfajores`}
                    </p>

                    {/* Descripción */}
                    <p className="text-sm text-[#7B3F00]/80 mb-6 leading-relaxed">
                      {packOption.description}
                    </p>

                    {/* Separador dorado */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C8972A] to-transparent mb-6" />

                    {/* Precio */}
                    <p className="text-4xl font-extrabold text-[#3D1C02] mb-1 tracking-tight">
                      ${price.toFixed(2)}
                    </p>

                    {/* Ahorro (solo si hay descuento) */}
                    {savings > 0 && (
                      <p className="text-xs text-green-600 font-semibold mb-2">
                        Ahorras ${savings.toFixed(2)}
                      </p>
                    )}
                    {savings === 0 && <div className="mb-2" />}

                    {/* Aviso de envío */}
                    <p className="text-[10px] text-[#7B3F00]/50 mb-5">
                      <i className="fi fi-rr-truck-side mr-1" aria-hidden="true" />
                      Envío se acuerda por WhatsApp
                    </p>

                    {/* CTA */}
                    <a
                      id={`cta-${flavor.id}-${packOption.id}`}
                      href={WA_LINK(
                        `¡Hola! Vengo de la página web y quiero pedir ${
                          packOption.qty === 1
                            ? `1 alfajor de ${flavor.name}`
                            : `la cajita x${packOption.qty} de alfajores de ${flavor.name}`
                        } ($${price.toFixed(2)})`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3D1C02] hover:bg-[#7B3F00] text-[#F5E6C8] font-semibold text-sm py-3 px-6 rounded-full transition-colors duration-200"
                      aria-label={`Pedir ${packOption.label} de ${flavor.name} por WhatsApp`}
                    >
                      <i
                        className="fi fi-brands-whatsapp text-base leading-none"
                        aria-hidden="true"
                      />
                      Pedir esta opción
                    </a>
                  </article>
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Próximamente: sabores futuros ── */}
        {comingSoon.length > 0 && (
          <div className="mt-6 reveal">
            <h3 className="text-center text-lg font-semibold text-[#7B3F00]/60 mb-6 uppercase tracking-widest text-xs">
              <i className="fi fi-rr-hourglass text-sm mr-2" aria-hidden="true" />
              Próximamente
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {comingSoon.map((flavor) => (
                <div
                  key={flavor.id}
                  className="relative flex flex-col items-center text-center rounded-2xl border-2 border-dashed border-[#C8972A]/30 p-6 opacity-60"
                  aria-label={`Próximamente: alfajor de ${flavor.name}`}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-3"
                    style={{ backgroundColor: `${flavor.accentColor}20` }}
                  >
                    <i
                      className={`${flavor.icon} text-2xl leading-none`}
                      style={{ color: flavor.accentColor }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-bold text-[#3D1C02] text-sm">{flavor.name}</p>
                  <p className="text-xs text-[#7B3F00]/60 mt-1 leading-snug">
                    {flavor.tagline}
                  </p>
                  <span className="mt-3 text-[10px] uppercase font-bold tracking-widest text-[#C8972A] border border-[#C8972A]/40 rounded-full px-3 py-0.5">
                    Muy pronto
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Caja Personalizada ── */}
        <div className="mt-16 reveal">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#C8972A]/40 bg-gradient-to-br from-[#2C1503] to-[#7B3F00] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            {/* Partículas decorativas */}
            <div className="absolute top-4 right-6 text-[#C8972A]/10 text-9xl font-extrabold select-none pointer-events-none">
              ✦
            </div>

            {/* Icono grande */}
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-[#C8972A]/20 border border-[#C8972A]/40">
              <i className="fi fi-rr-box-open text-4xl text-[#E0B54C] leading-none" aria-hidden="true" />
            </div>

            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8972A] mb-2 block">
                Pedido especial
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFF8F0] mb-2">
                Caja Personalizada
              </h3>
              <p className="text-[#F5E6C8]/80 text-sm leading-relaxed mb-1">
                ¿Necesitas una cantidad diferente o una combinación especial? Armamos tu caja
                a la medida: la cantidad exacta que quieras, perfecta para eventos,
                reuniones o regalos corporativos.
              </p>
              <p className="text-[#E0B54C] text-xs font-semibold">
                <i className="fi fi-rr-truck-side mr-1" aria-hidden="true" />
                El costo de envío es proporcional y se acuerda contigo por chat antes de confirmar.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <a
                id="cta-custom-box"
                href="https://wa.me/593983345792?text=%C2%A1Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20quiero%20pedir%20una%20caja%20personalizada%20de%20alfajores%20%F0%9F%8D%AA%20%C2%BFMe%20puedes%20dar%20informaci%C3%B3n%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-gold text-[#2C1503] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 whitespace-nowrap"
                aria-label="Pedir caja personalizada por WhatsApp"
              >
                <i className="fi fi-brands-whatsapp text-base leading-none" aria-hidden="true" />
                Personalizar mi caja
              </a>
            </div>
          </div>
        </div>

        {/* Nota artesanal */}
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
