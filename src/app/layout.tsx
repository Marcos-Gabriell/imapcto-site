import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Impacto360',
  description: 'Inovação em Marketing e Mídia!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " bg-preto-profundo text-white"}>
        {children}
      </body>
    </html>
  )
}
