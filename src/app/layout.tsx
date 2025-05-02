import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Impacto360 | Marketing, Inovação e Resultados',
  description: 'Transformamos ideias em experiências autênticas. Marketing, tecnologia e inovação para impulsionar marcas de forma única.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className + " bg-preto-profundo text-white"}>
        {children}
      </body>
    </html>
  );
}
