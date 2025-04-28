import React from 'react';

const Contato = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">CONTATO</h2>
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
              <input type="text" id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">E-mail</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800" />
            </div>
            <button type="submit" className="bg-accent text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-600 transition-colors w-full">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;