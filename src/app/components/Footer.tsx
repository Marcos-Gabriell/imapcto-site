import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-700 py-10 px-4">
      
      {/* Versão mobile */}
      <div className="block md:hidden text-center">
        <h3 className="text-lg font-semibold mb-4">Siga nas redes</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/_impacto360_/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 hover:text-red-500 transition" />
          </a>
        </div>
        <p className="text-xs text-gray-500">© 2025 Impacto360. Todos os direitos reservados.</p>
      </div>

      {/* Versão desktop/tablet */}
      <div className="hidden md:flex justify-center md:justify-between items-start gap-6 max-w-6xl mx-auto">
        {/* Logo e descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo1.png"
            alt="Logo Impacto360"
            width={100}
            height={100}
            className="mb-2"
          />
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-1">
            IMPACTO360
          </h2>
          <p className="text-sm text-gray-400">Transformando ideias em resultados.</p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#home" className="hover:underline">Início</a></li>
            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#projetos" className="hover:underline">Projetos</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Siga nas redes</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/_impacto360_/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos reservados (desktop/tablet) */}
      <div className="hidden md:block w-full text-center mt-12 text-gray-500 text-xs">
        © 2025 Impacto360. Todos os direitos reservados.
      </div>
    </footer>
  );
}
