import { X, ArrowRight } from 'lucide-react';
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
        <h2 className="text-lg sm:text-xl font-semibold">Como está sendo sua experiência no site?</h2>
        <p className="text-sm text-gray-400 mb-5">
          Seu feedback é muito importante para continuarmos evoluindo.
        </p>

        {/* Formulário */}
        <form className="space-y-4 text-sm">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Escreva seu feedback, sugestão ou problema"
            className="w-full p-3 h-28 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
          >
            ENVIAR <ArrowRight size={18} />
          </button>
        </form>

        {/* Rodapé */}
        <p className="text-xs text-gray-500 text-center mt-4">
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
