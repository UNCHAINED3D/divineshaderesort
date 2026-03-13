import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Divine Shade Resort | Rustic Couples Wellness Retreat",
  description: "Escape to the tranquil rainforest mountains of the Scenic Rim, Queensland. A rustic couples wellness resort among the gum trees.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Divine Shade Resort | Rustic Couples Wellness Retreat",
    description: "Escape to the tranquil rainforest mountains of the Scenic Rim, Queensland. A rustic couples wellness resort among the gum trees.",
    url: "https://divineshaderesort.com",
    siteName: "Divine Shade Resort",
    images: [
      {
        url: "/bungalow.png",
        width: 1200,
        height: 630,
        alt: "Divine Shade Resort - Rustic Couples Wellness Retreat in Scenic Rim Queensland",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Shade Resort | Rustic Couples Wellness Retreat",
    description: "Escape to the tranquil rainforest mountains of the Scenic Rim, Queensland. A rustic couples wellness resort among the gum trees.",
    images: ["/bungalow.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
