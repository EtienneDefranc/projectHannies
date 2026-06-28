/**
 * alfajores.ts — Catálogo de sabores y presentaciones.
 *
 * ─── CÓMO AGREGAR UN NUEVO SABOR ────────────────────────────────────────────
 * 1. Añade el id en el tipo `AlfajorFlavorId` dentro de lib/data/types.ts
 * 2. Agrega un nuevo objeto en el array `ALFAJOR_FLAVORS` aquí abajo.
 * 3. Si tiene imagen propia, colócala en /public y referencia la ruta en `image`.
 * 4. Listo — la UI lo mostrará automáticamente.
 * ────────────────────────────────────────────────────────────────────────────
 */

import type { AlfajorFlavor, PackOption } from "./types";

/* ─── Presentaciones de venta (aplican a TODOS los sabores) ─── */
export const PACK_OPTIONS: PackOption[] = [
  {
    id: "unit",
    label: "Unidad",
    qty: 1,
    flaticon: "fi fi-rr-cookie",
    description: "Perfecto para probar y enamorarte.",
  },
  {
    id: "box3",
    label: "Cajita x3",
    qty: 3,
    flaticon: "fi fi-rr-gift",
    badge: "Más pedido",
    description: "Ideal para compartir o regalar.",
  },
  {
    id: "box6",
    label: "Cajita x6",
    qty: 6,
    flaticon: "fi fi-rr-box-open",
    badge: "Mejor valor",
    description: "El regalo perfecto para toda ocasión.",
  },
];

/**
 * Descuentos por volumen aplicados sobre el precio unitario.
 * Edita aquí para ajustar los márgenes globalmente.
 */
export const VOLUME_DISCOUNTS: Record<PackOption["id"], number> = {
  unit:  0,      // Sin descuento
  box3:  0.083,  // ~8% de descuento en cajita x3
  box6:  0.167,  // ~17% de descuento en cajita x6
};

/** Calcula el precio de una presentación para un sabor dado */
export function calcPackPrice(
  pricePerUnit: number,
  qty: number,
  packId: PackOption["id"]
): number {
  const discount = VOLUME_DISCOUNTS[packId];
  const raw = pricePerUnit * qty * (1 - discount);
  // Redondear al múltiplo de $0.25 más cercano para precios limpios
  return Math.round(raw * 4) / 4;
}

/* ─── Catálogo de sabores ─── */
export const ALFAJOR_FLAVORS: AlfajorFlavor[] = [
  {
    id: "manjar",
    name: "Manjar",
    tagline: "Relleno de dulce de leche cremoso, cubierto de azúcar impalpable",
    pricePerUnit: 1.00,       // Precio base: $1 por unidad
    available: true,
    image: "/products-alfajores.png",
    accentColor: "#C8972A",
    icon: "fi fi-rr-cookie",
  },
  // ─── Futuros sabores (disponibles próximamente) ───────────────────────────
  {
    id: "pistacho",
    name: "Pistaccio",
    tagline: "Relleno de crema de pistaccio artesanal",
    pricePerUnit: 1.25,       // Premio por ingrediente especial
    available: false,         // false = "Próximamente" en la UI
    accentColor: "#6B8E4E",
    icon: "fi fi-rr-leaf",
  },
  {
    id: "nutella",
    name: "Nutella",
    tagline: "Relleno generoso de Nutella con avellanas",
    pricePerUnit: 1.25,
    available: false,
    accentColor: "#8B4513",
    icon: "fi fi-rr-chocolate",
  },
];

/** Devuelve solo los sabores actualmente disponibles */
export const AVAILABLE_FLAVORS = ALFAJOR_FLAVORS.filter((f) => f.available);
