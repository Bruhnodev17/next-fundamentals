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

export default function Home() {
  return (
    <div>
      <h1>Página Home</h1>
    </div>
  );
}
