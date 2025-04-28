import React from 'react';

const Hero = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-preto-profundo z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Coluna do Texto (Centralizado em telas menores) */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            INOVAÇÃO<br />
            <span className="text-fuchsia-600">EM MARKETING</span><br />
            PARA SEU<br className="hidden md:block" />
            <span className="text-fuchsia-600">NEGÓCIO</span> <br />
            <span className="text-roxo-futurista">CRESCER 360°</span>
          </h1>
          <div className="mt-6">
            <button className="bg-gradient-to-r from-roxo-futurista to-fuchsia-600 text-branco-neutro font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:from-roxo-futurista hover:to-roxo-futurista">
              FALE CONOSCO
            </button>
          </div>
        </div>

        {/* Gráfico Circular com Seta (Ocupando mais espaço à direita) */}
        <div className="w-full lg:w-96 h-auto flex-shrink-0">
          <img src="/grafico-circular-seta.png" alt="Gráfico Circular com Seta" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;