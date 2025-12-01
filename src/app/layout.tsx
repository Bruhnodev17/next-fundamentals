import "./globals.css";
import { Header } from "../components/header/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next Js",
  description: "Aprendendo os fundamentos do Next Js",
  openGraph: {
    title: "Estudando por vídeo aula do youtube",
    description: "Estudando para passaar na entrevista",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
