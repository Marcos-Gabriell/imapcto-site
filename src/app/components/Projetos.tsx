// Exemplo: components/ProjetosAdaptado.js (ou ajuste o seu Projetos.js)
import React from 'react';

const ProjetosAdaptado = () => {
  // REMOVIDO: <section className="bg-preto-profundo text-branco-neutro py-16 md:py-24">
  // A div abaixo agora é o elemento raiz deste componente específico.
  // A cor de fundo e padding virão da estrutura pai.
  return (
    <div className="text-branco-neutro"> {/* Mantém a cor do texto daqui */}
      {/* REMOVIDO: Container interno - o container mx-auto estará na estrutura pai */}
      {/* <div className="container mx-auto px-4 md:px-6 lg:px-8"> */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-azul-principal text-center md:text-left">PROJETOS</h2>
        {/* Seu grid atual. Pode precisar ajustar o número de colunas (sm:grid-cols-2 etc.)
            para ficar bom quando ocupar apenas metade da tela (md:w-1/2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Projeto 1 */}
          <div className="rounded-lg overflow-hidden flex flex-col items-center">
            <img
              src="/logo.png" // Sua imagem
              alt="Projeto 1"
              className="w-32 h-auto object-contain mb-2" // Talvez precise ajustar o tamanho
            />
            <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
          </div>
          {/* Projeto 2 */}
          <div className="rounded-lg overflow-hidden flex flex-col items-center">
            <img
              src="/logo.png" // Sua imagem
              alt="Projeto 2"
              className="w-32 h-auto object-contain mb-2"
            />
            <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
          </div>
          {/* Projeto 3 */}
          <div className="rounded-lg overflow-hidden flex flex-col items-center">
            <img
              src="/logo.png" // Sua imagem
              alt="Projeto 3"
              className="w-32 h-auto object-contain mb-2"
            />
            <h3 className="text-sm font-semibold text-center">Trabalho ou caso de sucesso</h3>
          </div>
        </div>
      {/* </div> */} {/* Fim do container interno removido */}
    </div> // Fim da div raiz do componente adaptado
  );
  // REMOVIDO: </section>
};

export default ProjetosAdaptado;