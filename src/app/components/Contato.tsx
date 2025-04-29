// components/Contato.js
import React from 'react';

const Contato = () => {
  return (
    <div className="text-white">
      {/* Ajuste text-primary para a cor ciano do título no layout */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-cyan-400 text-center md:text-left">CONTATO</h2>
      <div className="h-fit">
        {/* Formulário com espaçamento entre os elementos */}
        <form className="h-fit space-y-5"> {/* Aumentei um pouco o espaço */}
          <div> {/* Agrupa Label + Input */}
            <label htmlFor="nome" className="block text-gray-300 text-sm font-bold mb-1">Nome</label>
            <input
              type="text"
              id="nome"
              // Estilos para o input (fundo escuro, texto claro, borda sutil)
              className="appearance-none border border-gray-700/50 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500 text-sm" // Aumentei py, ajustei cores/borda
              placeholder="Seu nome"
            />
          </div>
          <div> {/* Agrupa Label + Input */}
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              // Estilos para o input (fundo escuro, texto claro, borda sutil)
              className="appearance-none border border-gray-700/50 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500 text-sm" // Aumentei py, ajustei cores/borda
              placeholder="Seu e-mail"
            />
          </div>
          {/* Botão com gradiente e cantos arredondados */}
          <button
            type="submit"
            // Gradiente do roxo para o rosa, cantos arredondados (use rounded-lg ou rounded-full)
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity w-full mt-4" // Usei rounded-lg, ajuste mt se space-y não for suficiente
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;