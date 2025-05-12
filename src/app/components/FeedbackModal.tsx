'use client';

import { useState, useEffect, FormEvent } from 'react';
import { X, ArrowRight, Mail, User } from 'lucide-react';
import Image from 'next/image';

export default function FeedbackModal({
  isOpen,
  onClose,
  onRedirectContato,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRedirectContato: () => void;
}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage(null);

    if (nome.length < 3 || nome.length > 15) {
      setErrorMessage('O nome deve ter entre 3 e 15 caracteres.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      setLoading(false);
      return;
    }

    if (mensagem.length < 5 || mensagem.length > 200) {
      setErrorMessage('A mensagem deve ter entre 5 e 200 caracteres.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://envio-de-email-portifolio.onrender.com/feedback-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email, mensagem }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div
      className="relative z-10 bg-[#111111] text-white w-full sm:w-[28rem] sm:rounded-xl p-6 pt-8 sm:min-h-fit min-h-screen flex flex-col justify-center"
      onClick={(e) => e.stopPropagation()}
    >
    <button
      onClick={onClose}
      className="absolute top-10 sm:top-4 right-4 text-white hover:text-gray-400"
      >
      <X size={28} />
    </button>

        <div className="mb-4 mt-6 sm:mt-0">
          <Image src="/logo1.png" alt="Logo" width={60} height={60} />
        </div>

        <h2 className="text-base font-semibold leading-snug">
          Como está sendo sua experiência no site?
        </h2>
        <p className="text-xs text-gray-400 mb-4">
          Seu feedback é muito importante para continuarmos evoluindo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2 transition-all duration-200 hover:border-purple-500 focus-within:border-purple-500">
            <User className="text-purple-400 w-4 h-4" />
            <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
            />
          </div>

          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2 transition-all duration-200 hover:border-purple-500 focus-within:border-purple-500">
          <Mail className="text-purple-400 w-4 h-4" />
          <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
          />
          </div>


          <textarea
            placeholder="Escreva seu feedback, sugestão ou problema"
            value={mensagem}
            onChange={(e) => {
              if (e.target.value.length <= 200) {
                setMensagem(e.target.value);
              }
            }}
            maxLength={200}
            required
            className="w-full p-2 min-h-[5rem] max-h-[10rem] rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 resize-none focus:outline-none focus:ring-2 hover:border-purple-500  focus:ring-purple-500 text-sm"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-2.5 rounded-md text-white font-medium hover:opacity-90 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Enviando...' : (
              <>
                ENVIAR <ArrowRight size={16} />
              </>
            )}
          </button>

          {errorMessage && (
            <p className="text-red-400 text-center text-sm mt-1">{errorMessage}</p>
          )}
          {status === 'success' && (
            <p className="text-green-400 text-center text-sm mt-1">
              Feedback enviado com sucesso!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm mt-1">
              Erro ao enviar. Tente novamente.
            </p>
          )}
        </form>

        <p className="text-[15px] text-gray-500 text-center mt-4">
          Precisa de ajuda?{' '}
          <button
            type="button"
            onClick={onRedirectContato}
            className="underline text-purple-400"
          >
            Clique aqui
          </button>
        </p>
      </div>
    </div>
  );
}
