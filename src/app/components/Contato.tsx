
import React from 'react';

const Contato = () => {
  return (
    <div className="bg-preto-profundo text-white py-12 md:py-20 px-4 flex justify-center">
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
      <span className="text-azul-principal">CONTATO</span>
    </h2>
    <form className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="nome" className="block text-gray-100 text-sm font-bold mb-2">Nome</label>
        <input
          type="text"
          id="nome"
          className="appearance-none border border-gray-700 rounded-full w-full py-2.5 px-5 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-400 text-sm"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">E-mail</label>
        <input
          type="email"
          id="email"
          className="appearance-none border border-gray-700 rounded-full w-full py-2.5 px-5 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-400 text-sm"
          placeholder="Seu e-mail"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg w-full hover:from-roxo-futurista hover:to-roxo-futurista text-sm"
      >
        ENVIAR
      </button>
    </form>
  </div>
</div>

  );
};

export default Contato;