// components/Contato.js
import React from 'react';

const Contato = () => {
  return (
    <div className="bg-preto-profundo text-white py-16 md:py-24 flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          <span className="text-azul-principal">CONTATO</span>
        </h2>
        <div className="h-fit">
          <form className="h-fit space-y-6"> {/* Aumentei o espaço entre os campos */}
            <div>
              <label htmlFor="nome" className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
              <input
                type="text"
                id="nome"
                className="appearance-none border border-gray-700 rounded-full w-full py-3 px-6 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-500 text-base" // Campos arredondados
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="appearance-none border border-gray-700 rounded-full w-full py-3 px-6 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-500 text-base" // Campos arredondados
                placeholder="Seu e-mail"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg w-full" // Botão arredondado e gradiente rosa-roxo
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;