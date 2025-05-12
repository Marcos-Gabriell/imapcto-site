import React from 'react';
import { FaYoutube, FaImage, FaInstagram, FaCode } from 'react-icons/fa';

const Servicos = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-azul-principal drop-shadow-lg text-left">
          Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-azul-tech rounded-lg p-8 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaInstagram className="text-white text-5xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Social Media</h3>
          </div>

          <div className="bg-roxo-futurista rounded-lg p-8 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaYoutube className="text-white text-5xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Vídeos</h3>
          </div>

          <div className="bg-rosa-medio rounded-lg p-8 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaImage className="text-white text-5xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Flyers</h3>
          </div>

          <div className="bg-roxo-futurista rounded-lg p-8 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaCode className="text-white text-5xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold text-center">Sites</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
