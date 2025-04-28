import React from 'react';

const Sobre = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-fuchsia-600">SOBRE</h2>
        <div className="relative">
          <div className="flex justify-center items-center mb-8">
            {/* Ícone IMPACTO360 */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-azul-tech to-roxo-futurista flex items-center justify-center mr-4">
              <img src="/logo-interna-branco.png" alt="Ícone Impacto 360" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">IMPACTO360</h3>
              <p className="text-gray-400">Impacto360, referência em marketing digital e inovação!</p>
            </div>
          </div>
          {/* Linha do tempo */}
          <div className="relative mt-10">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-0.5"></div>
            <div className="flex justify-between text-center relative z-10">
              <div>
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xs text-branco-neutro">2020</span>
                </div>
                <p className="mt-10 text-sm text-gray-400">Trajetória</p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xs text-branco-neutro">2021</span>
                </div>
                <p className="mt-10 text-sm text-gray-400">Amoções</p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xs text-branco-neutro">2022</span>
                </div>
                <p className="mt-10 text-sm text-gray-400">Inovação</p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xs text-branco-neutro">2023</span>
                </div>
                <p className="mt-10 text-sm text-gray-400">Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;