import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-preto-profundo text-white border-t border-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo + Frase */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo1.png"
            alt="Logo Impacto360"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-sm text-gray-400">Transformando ideias em resultados.</p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Siga nas redes</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/_impacto360_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos Reservados */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2025 Impacto360. Todos os direitos reservados.
      </div>
    </footer>
  );
}
