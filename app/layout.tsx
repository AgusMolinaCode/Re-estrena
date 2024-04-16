import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Re-estrena",
  description:
    "Re-estrena es una plataforma para comprar y vender ropa de segunda mano. ¡Únete a la moda sostenible!",
  icons: {
    icon: "/assets/icons/clothes.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={bebasNeue.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
