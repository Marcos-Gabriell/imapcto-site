import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Impacto360 | Marketing, Inovação e Resultados',
  description: 'Somos a ponte entre ideias criativas e resultados reais. A Impacto360 transforma visões em experiências digitais que conectam marcas ao futuro.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className + " bg-preto-profundo text-white"}>
        {children}
      </body>
    </html>
  )
}
