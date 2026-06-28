/**
 * types.ts — Interfaces del catálogo de alfajores.
 *
 * Diseñado para escalar fácilmente:
 * - Nuevos sabores (pistaccio, nutella, etc.) → agregar un AlfajorFlavor
 * - Nuevas presentaciones (cajita x12, etc.)  → agregar un PackSize
 * - Precios diferenciados por sabor            → campo `pricePerUnit` en AlfajorFlavor
 */

/* ─── Presentaciones disponibles ─── */
export type PackSize = "unit" | "box3" | "box6";

/** Configuración de cada presentación de venta */
export interface PackOption {
  id: PackSize;
  label: string;       // Ej: "Cajita x3"
  qty: number;         // Cantidad de alfajores
  flaticon: string;    // Clase de icono Flaticon
  badge?: string;      // Etiqueta especial (ej: "Más pedido")
  description: string; // Descripción corta para la card
}

/* ─── Sabor / Variedad de alfajor ─── */
export type AlfajorFlavorId = "manjar" | "pistacho" | "nutella"; // Añadir aquí nuevos sabores

export interface AlfajorFlavor {
  id: AlfajorFlavorId;
  name: string;              // Nombre visible (ej: "Manjar")
  tagline: string;           // Descripción corta del relleno
  pricePerUnit: number;      // Precio base por unidad (en USD)
  available: boolean;        // false = "Próximamente"
  image?: string;            // Ruta en /public (opcional por sabor)
  accentColor?: string;      // Color de acento para la UI del sabor
  icon: string;              // Icono Flaticon representativo
}

/* ─── Precio calculado para una presentación ─── */
export interface PackPrice {
  packOption: PackOption;
  price: number;             // Precio total de la presentación
  savings: number;           // Ahorro respecto al precio unitario × qty
  waMessage: string;         // Mensaje WhatsApp pre-armado
}
