import type { Metadata } from "next";
import { Playfair_Display, Inter, Source_Serif_4 } from "next/font/google";
import ContactProvider from "@/components/providers/ContactProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leveragestrategies.ai"),
  title: {
    default: "Leverage Strategies | Systems That Scale You",
    template: "%s | Leverage Strategies",
  },
  description:
    "Research, frameworks, and consulting for executive teams building AI-native go-to-market systems. By Dan Albasry.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Leverage Strategies",
    title: "Leverage Strategies | Systems That Scale You",
    description:
      "Research, frameworks, and consulting for executive teams building AI-native go-to-market systems.",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${sourceSerif.variable}`}
    >
      <body className="antialiased">
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
