import React from 'react';

const Hero = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24 lg:py-36 relative overflow-hidden min-h-screen">
      {/* Fundo preto profundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-preto-profundo z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:justify-around">
        {/* Coluna do Texto e Botão */}
        <div className="text-center md:text-left max-w-xl md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            INOVAÇÃO<br />
            <span>EM MARKETING</span><br />
            PARA SEU<br />
            <span className="text-fuchsia-600">NEGÓCIO</span> <br className="md:hidden"/>
            <span className="text-fuchsia-600">CRESCER 360°</span>
          </h1>
          <button className="bg-gradient-to-r from-roxo-futurista to-fuchsia-600 text-branco-neutro font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:from-roxo-futurista hover:to-roxo-futurista">
            FALE CONOSCO
          </button>
        </div>

        {/* Logo "IMPACTO 360" (como imagem) */}
        <div className="w-72 md:w-96 h-auto mb-8 md:mb-0 md:order-2 md:ml-12 lg:ml-32">
          <img src="/logo.png" alt="Logo Impacto 360" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;