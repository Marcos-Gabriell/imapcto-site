import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Impacto360 | Marketing e Inovação',
  description: 'Ideias que viram experiências. Estratégias para impulsionar marcas com autenticidade.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-preto-profundo text-white w-full min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
