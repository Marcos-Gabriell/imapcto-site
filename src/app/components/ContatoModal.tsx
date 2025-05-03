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
      <div className="bg-[#111111] text-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative">
        {/* Botão de fechar */}
        <button onClick={onClose} className="absolute top-4 right-4 hover:text-gray-400">
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-4">
          <Image src="/logo1.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Título */}
        <h2 className="text-lg sm:text-xl font-semibold">Deixe seu contato</h2>
        <p className="text-sm text-gray-400 mb-5">
          Retornaremos o mais rápido possível.
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* Nome */}
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-lg px-3 py-3">
            <User className="text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
            />
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-lg px-3 py-3">
            <Mail className="text-purple-400 w-5 h-5" />
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
          <div className="flex items-center gap-2 bg-[#1f1f1f] border border-gray-700 rounded-lg px-3 py-3">
            <Phone className="text-purple-400 w-5 h-5" />
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
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Enviando...' : (
              <>
                ENVIAR <ArrowRight size={18} />
              </>
            )}
          </button>

          {/* Feedback */}
          {status === 'success' && (
            <p className="text-green-400 text-center text-sm mt-2">
              Contato enviado com sucesso!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm mt-2">
              Erro ao enviar. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
