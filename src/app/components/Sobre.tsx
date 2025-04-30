import React from 'react';
import { Rocket, TrendingUp, Lightbulb } from 'lucide-react';

const Sobre = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-20 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-tech/10 to-roxo-futurista/10 blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Título "SOBRE" */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-azul-principal drop-shadow-lg text-left">
          SOBRE
        </h2>

        <div className="flex flex-col items-center">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-52 h-52 md:w-52 md:h-52 mb-4">
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

            {/* Frase de impacto principal - GRANDE e destacada */}
            <p className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6 max-w-5xl leading-snug">
              Somos a ponte entre a <span className="text-fuchsia-500">visão do agora</span> e o <span className="text-azul-tech">futuro</span> que você quer construir.
            </p>

            {/* Texto descritivo - menor e mais compacto */}
            <div className="text-center text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed space-y-3">
              <p>
                Somos uma agência criada para transformar ideias em experiências inesquecíveis. Desde 2024, unimos inovação, criatividade e tecnologia para dar vida a projetos que conectam marcas às pessoas de forma autêntica e impactante.
              </p>
              <p>
                Mais do que entregas criativas, nosso propósito é gerar valor real, fortalecer identidades e impulsionar resultados. Caminhamos lado a lado com nossos clientes, construindo não só soluções digitais, mas um futuro de sucesso compartilhado.
              </p>
            </div>
          </div>

          {/* Linha do Tempo - ampliada e com cor mais chamativa */}
        {/* Linha do Tempo - com linha passando além das bolinhas */}
<div className="relative w-full max-w-5xl mt-16 md:mt-20 px-6">
  {/* Linha contínua */}
  <div className="absolute top-1/2 left-[-5%] right-[-5%] h-2 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-full -translate-y-1/2 z-0"></div>

  <div className="flex justify-between items-center text-center relative z-10">
    {/* Fundação */}
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
        <Rocket size={24} className="text-white" />
      </div>
      <p className="mt-2 text-sm md:text-base text-white font-semibold">2024</p>
      <p className="text-sm md:text-base text-white/80 font-medium">Fundação</p>
    </div>

    {/* Expansão */}
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
        <TrendingUp size={24} className="text-white" />
      </div>
      <p className="mt-2 text-sm md:text-base text-white font-semibold">2025</p>
      <p className="text-sm md:text-base text-white/80 font-medium">Expansão</p>
    </div>

    {/* Futuro */}
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300">
        <Lightbulb size={24} className="text-white" />
      </div>
      <p className="mt-2 text-sm md:text-base text-white font-semibold">Futuro</p>
      <p className="text-sm md:text-base text-white/80 font-medium">Inovação</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;
