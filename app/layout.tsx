import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { MotionProvider } from "@/components/motion/reveal";
import { asset } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const title = "La Bellota B&B · Recoleta, Buenos Aires";
const description =
  "Bed & breakfast en una casona colonial reciclada en el corazón de Recoleta, Buenos Aires. Tres habitaciones privadas con cama Queen, cocina compartida y WiFi.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: asset("/img/favicon.png") },
  openGraph: {
    title,
    description,
    locale: "es_AR",
    type: "website",
    // Add images: ["/img/rooms/premium-3.jpg"] plus metadataBase once the
    // site has a domain; without one Next resolves them to localhost.
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSerif.variable} antialiased`}>
      <body className="min-h-screen">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
