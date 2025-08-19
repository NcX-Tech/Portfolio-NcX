import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio NcX - Desenvolvedor Backend",
  description:
    "Portfólio de Brenno Souza - Desenvolvedor Backend Júnior especializado em PHP, Java e C#",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
