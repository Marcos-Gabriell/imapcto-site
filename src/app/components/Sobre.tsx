import React from 'react';
import { Rocket, TrendingUp, Lightbulb } from 'lucide-react';

const Sobre = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24 lg:py-36 relative overflow-hidden">
      {/* Fundo preto liso */}
      <div className="absolute top-0 left-0 w-full h-full bg-preto-profundo z-0"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Título "SOBRE" */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-azul-principal text-left w-full">
          SOBRE
        </h2>

        {/* Logo e Frase de Impacto */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-52 h-52 mb-4">
            <img
              src="/logo1.png"
              alt="Logo Impacto360"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <h3 className="text-fuchsia-600 text-2xl md:text-3xl font-bold text-center mb-2">
            IMPACTO
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-azul-tech to-roxo-futurista">
              360
            </span>
          </h3>

          <p className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6 max-w-5xl leading-snug">
            Somos a ponte entre a <span className="text-fuchsia-500">visão do agora</span> e o <span className="text-azul-tech">futuro</span> que você quer construir.
          </p>

          <div className="text-center text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed space-y-3">
            <p>
              Somos uma agência criada para transformar ideias em experiências inesquecíveis. Desde 2024, unimos inovação, criatividade e tecnologia para dar vida a projetos que conectam marcas às pessoas de forma autêntica e impactante.
            </p>
            <p>
              Mais do que entregas criativas, nosso propósito é gerar valor real, fortalecer identidades e impulsionar resultados. Caminhamos lado a lado com nossos clientes, construindo não só soluções digitais, mas um futuro de sucesso compartilhado.
            </p>
          </div>
        </div>

        {/* Linha do Tempo */}
        <div className="relative w-full max-w-5xl mt-16 md:mt-20 px-6">
          {/* Linha contínua suave e moderna */}
          <div className="absolute top-1/2 left-1/2 w-[110%] h-2 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>

          <div className="flex justify-between items-center text-center relative z-10">
            {/* Fundação */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
                <Rocket size={32} className="text-white" />
              </div>
              <p className="mt-2 text-base text-white font-semibold">2024</p>
              <p className="text-sm text-white/80 font-medium">Fundação</p>
            </div>

            {/* Expansão */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
                <TrendingUp size={32} className="text-white" />
              </div>
              <p className="mt-2 text-base text-white font-semibold">2025</p>
              <p className="text-sm text-white/80 font-medium">Expansão</p>
            </div>

            {/* Futuro */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
                <Lightbulb size={32} className="text-white" />
              </div>
              <p className="mt-2 text-base text-white font-semibold">Futuro</p>
              <p className="text-sm text-white/80 font-medium">Inovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
