import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ─── Google Fonts ─── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "Hannies Alfajores | Repostería Artesanal en Samborondón",
  description:
    "Alfajores artesanales hechos con amor. Rellenos de dulce de leche cremoso, cubiertos de azúcar impalpable. Entrega a domicilio en Samborondón y Guayaquil. ¡Pide ya por WhatsApp!",
  keywords: [
    "alfajores",
    "repostería artesanal",
    "Samborondón",
    "Guayaquil",
    "delivery",
    "dulce de leche",
    "hannies",
  ],
  openGraph: {
    title: "Hannies Alfajores | Repostería Artesanal",
    description:
      "Alfajores artesanales con relleno de dulce de leche. Delivery en Samborondón y Guayaquil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        {/* ─── Flaticon UIcons — Regular Rounded ─── */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        {/* ─── Flaticon UIcons — Solid Rounded ─── */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css"
        />
        {/* ─── Flaticon UIcons — Brands ─── */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
