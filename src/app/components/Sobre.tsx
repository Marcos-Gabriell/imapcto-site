import React from 'react';

const Sobre = () => {
  return (
   <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24">
      {/* Brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-tech/10 to-roxo-futurista/10 blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Título "SOBRE" alinhado à esquerda */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-azul-principal drop-shadow-lg text-left">
          SOBRE
        </h2>

        <div className="flex flex-col items-center">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-50 h-50 rounded-full bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg">
              <img
                src="/logo.png"
                alt="Logo Impacto360"
                className="w-50 h-50 object-contain"
              />
            </div>

            <h3 className="text-fuchsia-600 text-2xl md:text-3xl font-bold text-center mb-4">
              IMPACTO<span className="text-transparent bg-clip-text bg-gradient-to-r from-azul-tech to-roxo-futurista">360</span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg text-center max-w-3xl leading-relaxed">
              Somos uma agência que nasceu para transformar ideias em experiências marcantes.
              Desde 2024, trazemos inovação, criatividade e tecnologia em cada projeto.
              Nosso compromisso é gerar impacto real para nossos clientes e construir um futuro de sucesso, lado a lado.
            </p>
          </div>

          {/* Linha do Tempo Atualizada */}
          <div className="relative w-full max-w-4xl mt-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-fuchsia-600 rounded-full -translate-y-1/2"></div> {/* Usei bg-fuchsia-600 */}
            <div className="flex justify-around items-center text-center relative z-10">
              {/* 2024 - Fundação */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-roxo-futurista flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300"> {/* Bolinha roxa */}
                  <span className="text-sm text-branco-neutro font-bold">2024</span>
                </div>
                <p className="mt-4 text-sm md:text-base text-gray-400 font-medium">Fundação</p>
              </div>

              {/* 2025 - Expansão */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-roxo-futurista flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300"> {/* Bolinha roxa */}
                  <span className="text-sm text-branco-neutro font-bold">2025</span>
                </div>
                <p className="mt-4 text-sm md:text-base text-gray-400 font-medium">Expansão</p>
              </div>

              {/* Futuro - Inovação */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azul-tech to-roxo-futurista flex items-center justify-center mx-auto shadow-md hover:scale-110 transition-transform duration-300"> {/* Bolinha roxa (mantive o gradiente para o "Futuro") */}
                  <span className="text-sm text-branco-neutro font-bold">Futuro</span>
                </div>
                <p className="mt-4 text-sm md:text-base text-gray-400 font-medium">Inovação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;