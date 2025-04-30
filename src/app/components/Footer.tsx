import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-8 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Frase */}
        <div className="flex flex-col items-center w-full">
          <Image
            src="/logo1.png"
            alt="Logo Impacto360"
            width={120}
            height={120}
            className="mb-2"
          />
          <p className="text-sm text-gray-400 text-center">
            Transformando ideias em resultados.
          </p>
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

        {/* Redes sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Siga nas redes</h3>
          <div className="flex space-x-4 text-white">
            <a href="https://www.instagram.com/_impacto360_/?igsh=cWptZ2txMmtkNXE4#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

      {/* Direitos reservados */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © 2025 Impacto360. Todos os direitos reservados.
      </div>
    </footer>
  );
}
