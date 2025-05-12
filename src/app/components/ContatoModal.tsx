'use client';

import { useState, useEffect, FormEvent } from 'react';
import { X, ArrowRight, Mail, User, Phone } from 'lucide-react';
import Image from 'next/image';

export default function ContatoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
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

    if (telefone.length < 10 || telefone.length > 15) {
      setErrorMessage('Digite um telefone válido com DDD.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://envio-de-email-portifolio.onrender.com/contato-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone }),
      });

      if (response.ok) {
        setStatus('success');
        setNome('');
        setEmail('');
        setTelefone('');
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
        className="relative z-10 bg-[#111111] text-white w-full sm:w-[28rem] sm:rounded-xl p-6 pt-5 sm:min-h-fit min-h-screen flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-12 sm:top-4 right-4 text-white hover:text-gray-400"
        >
          <X size={28} />
        </button>

        <div className="mb-4 mt-6 sm:mt-0">
          <Image src="/logo1.png" alt="Logo" width={60} height={60} />
        </div>

        <h2 className="text-base font-semibold leading-snug">Deixe seu contato</h2>
        <p className="text-xs text-gray-400 mb-4">Retornaremos o mais rápido possível.</p>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          {/* Nome */}
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

          {/* Email */}
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

          {/* Telefone */}
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2 transition-all duration-200 hover:border-purple-500 focus-within:border-purple-500">
            <Phone className="text-purple-400 w-4 h-4" />
            <input
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
            />
          </div>

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
              Contato enviado com sucesso!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm mt-1">
              Erro ao enviar. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
