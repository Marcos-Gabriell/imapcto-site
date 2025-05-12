import React from 'react';

const Hero = ({ onOpenContato }: { onOpenContato: () => void }) => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-preto-profundo z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:justify-around">
        
        {/* Texto */}
        <div className="text-center md:text-left max-w-xl md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            INOVAÇÃO<br />
            <span>EM MARKETING</span><br />
            PARA SEU<br />
            <span className="text-fuchsia-600">NEGÓCIO</span> <br className="md:hidden"/>
            <span className="text-fuchsia-600">CRESCER 360°</span>
          </h1>

          <button
            onClick={onOpenContato}
            className="bg-gradient-to-r from-roxo-futurista to-fuchsia-600 text-branco-neutro font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:from-roxo-futurista hover:to-roxo-futurista"
          >
            FALE CONOSCO
          </button>
        </div>

        {/* Imagem */}
        <div className="w-[280px] sm:w-[320px] md:w-[28rem] lg:w-[35rem] h-auto mt-10 md:mt-0 flex justify-center items-center md:order-2">
          <img
            src="/logo1.png"
            alt="Logo Impacto 360"
            className="w-full max-w-[400px] sm:max-w-[460px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
