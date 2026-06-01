import type { Metadata } from "next";
import { Inter, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalAudio } from "@/components/GlobalAudio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "OC Universe Hub",
  description: "A centralized hub for Original Characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body
        className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} antialiased selection:bg-highlight/30`}
      >
        <ThemeProvider>
          {children}
          <GlobalAudio />
        </ThemeProvider>
      </body>
    </html>
  );
}
