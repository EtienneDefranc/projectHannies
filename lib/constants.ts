/**
 * constants.ts — Valores constantes reutilizables en toda la aplicación.
 */

/** Número de WhatsApp en formato internacional (sin + ni espacios) */
export const WA_NUMBER = "593983345792";

/**
 * Genera un enlace de WhatsApp con mensaje predeterminado.
 * @param message - Texto del mensaje (se codificará como URI)
 */
export function WA_LINK(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** URL del perfil de Instagram */
export const INSTAGRAM_URL = "https://www.instagram.com/by.hannies";

/** Handle de Instagram */
export const INSTAGRAM_HANDLE = "@by.hannies";
