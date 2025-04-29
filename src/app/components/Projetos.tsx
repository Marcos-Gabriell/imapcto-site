import React from 'react';

const Projetos = () => {
  return (
    <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-azul-principal drop-shadow-lg text-center"> {/* Centralizei o título */}
        Projetos
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center max-w-7xl">
        {/* Projeto 1 */}
        <div className="rounded-lg overflow-hidden shadow-md flex flex-col items-center">
          <img
            src="/logo.png" // Substitua pela URL da sua imagem real
            alt="Projeto 1"
            className="w-20 h-auto object-contain mb-2"
          />
          <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
        </div>

        {/* Projeto 2 */}
        <div className="rounded-lg overflow-hidden shadow-md flex flex-col items-center">
          <img
            src="/logo.png" // Substitua pela URL da sua imagem real
            alt="Projeto 2"
            className="w-20 h-auto object-contain mb-2"
          />
          <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
        </div>

        {/* Projeto 3 */}
        <div className="rounded-lg overflow-hidden shadow-md flex flex-col items-center">
          <img
            src="/logo.png" // Substitua pela URL da sua imagem real
            alt="Projeto 3"
            className="w-20 h-auto object-contain mb-2"
          />
          <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
        </div>
      </div>
    </section>
  );
};

export default Projetos;