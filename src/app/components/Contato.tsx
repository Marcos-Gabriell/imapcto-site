"use client";
import React, { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://envio-de-email-portifolio.onrender.com/impacto360-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, phone })
      });

      if (response.ok) {
        setStatus('success');
        setNome('');
        setEmail('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-preto-profundo text-white py-12 md:py-20 px-4 flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
          <span className="text-azul-principal">CONTATO</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="nome" className="block text-gray-100 text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="appearance-none border border-gray-700 rounded-full w-full py-2.5 px-5 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-400 text-sm"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none border border-gray-700 rounded-full w-full py-2.5 px-5 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-400 text-sm"
              placeholder="Seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-100 text-sm font-bold mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="appearance-none border border-gray-700 rounded-full w-full py-2.5 px-5 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-azul-principal focus:border-transparent placeholder-gray-400 text-sm"
              placeholder="(00) 00000-0000"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md w-full text-sm ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg hover:from-roxo-futurista hover:to-roxo-futurista'
            }`}
          >
            {loading ? 'Enviando...' : 'ENVIAR'}
          </button>

          {status === 'success' && <p className="text-green-400 text-sm mt-2 text-center">Mensagem enviada com sucesso!</p>}
          {status === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Erro ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contato;
