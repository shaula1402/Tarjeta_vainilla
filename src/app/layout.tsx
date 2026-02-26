import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Currículum",
  description: "Currículum profesional",
  icons: {
    icon: "/ICO/moño.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}