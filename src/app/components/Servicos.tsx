import React from 'react';
import { FaFacebookF, FaYoutube, FaImage, FaInstagram, FaCode } from 'react-icons/fa'; // Importei FaInstagram e FaCode

const Servicos = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-azul-principal">SERVIÇOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center"> {/* Mantenho justify-center */}
          {/* Serviço 1: Social Media */}
          <div className="bg-azul-tech rounded-lg p-6 flex flex-col items-center justify-center max-w-xs"> {/* Mantenho max-w-xs */}
            <FaInstagram className="text-white text-3xl mb-2" /> {/* Substituí FaFacebookF por FaInstagram */}
            <h3 className="text-sm md:text-lg font-semibold text-center">Social Media</h3>
          </div>

          {/* Serviço 2: Vídeos */}
          <div className="bg-roxo-futurista rounded-lg p-6 flex flex-col items-center justify-center max-w-xs"> {/* Mantenho max-w-xs */}
            <FaYoutube className="text-white text-3xl mb-2" />
            <h3 className="text-sm md:text-lg font-semibold text-center">Vídeos</h3>
          </div>

          {/* Serviço 3: Flyers */}
          <div className="bg-rosa-medio rounded-lg p-6 flex flex-col items-center justify-center max-w-xs"> {/* Mantenho max-w-xs */}
            <FaImage className="text-white text-3xl mb-2" />
            <h3 className="text-sm md:text-lg font-semibold text-center">Flyers</h3>
          </div>

          {/* Serviço 4: Branding */}
          <div className="bg-roxo-futurista rounded-lg p-6 flex flex-col items-center justify-center max-w-xs"> {/* Mantenho max-w-xs */}
            <FaCode className="text-white text-3xl mb-2" /> {/* Substituí FaPaintBrush por FaCode */}
            <h3 className="text-sm md:text-lg font-semibold text-center">Sites</h3> {/* Substituí Branding por Sites */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;