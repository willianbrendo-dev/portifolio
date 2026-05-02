import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Willian Brendo | Engenheiro de Software Full-Stack",
  description: "Solucoes corporativas, automacao avancada e arquitetura escalavel.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "Engenheiro de Software Senior",
    "Willian Brendo",
    "Automacao",
    "Next.js",
    "Python",
    "OpenCV",
    "VPS Ubuntu",
  ],
  openGraph: {
    title: "Willian Brendo | Engenheiro de Software Full-Stack",
    description:
      "Solucoes corporativas, automacao avancada e arquitetura escalavel para projetos B2B.",
    type: "website",
    locale: "pt_BR",
    siteName: "Willian Brendo Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
