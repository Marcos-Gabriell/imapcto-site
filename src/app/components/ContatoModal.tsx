'use client';

import { useState, FormEvent } from 'react';
import { X, Mail, Phone, User, ArrowRight } from 'lucide-react';
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
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        'https://envio-de-email-portifolio.onrender.com/impacto360-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email, phone }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setNome('');
        setEmail('');
        setPhone('');
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
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
      <div className="bg-[#111111] text-white rounded-2xl p-5 w-full max-w-sm shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-400"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="mb-3">
          <Image src="/logo1.png" alt="Logo" width={30} height={30} />
        </div>

        {/* Título */}
        <h2 className="text-base font-semibold leading-snug">
          Deixe seu contato
        </h2>
        <p className="text-xs text-gray-400 mb-4">
          Retornaremos o mais rápido possível.
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          {/* Nome */}
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2">
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
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2">
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
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-md px-3 py-2">
            <Phone className="text-purple-400 w-4 h-4" />
            <input
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
            />
          </div>

          {/* Botão */}
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

          {/* Feedback */}
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
