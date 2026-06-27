"use client";

/**
 * page.tsx — Página principal (SPA) que ensambla todos los componentes.
 * Activa las animaciones de reveal al cargar.
 */

import Navbar           from "@/components/Navbar";
import HeroSection      from "@/components/HeroSection";
import ProductsSection  from "@/components/ProductsSection";
import LogisticsSection from "@/components/LogisticsSection";
import FooterSection    from "@/components/FooterSection";
import WhatsAppButton   from "@/components/WhatsAppButton";
import { useReveal }    from "@/hooks/useReveal";

export default function Home() {
  // Activa las animaciones de entrada por scroll
  useReveal();

  return (
    <main>
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Hero — pantalla completa */}
      <HeroSection />

      {/* Productos y precios */}
      <ProductsSection />

      {/* Logística y envíos */}
      <LogisticsSection />

      {/* Footer y contacto */}
      <FooterSection />

      {/* Botón flotante de WhatsApp (siempre visible) */}
      <WhatsAppButton />
    </main>
  );
}
