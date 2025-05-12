"use client";

import React, { useState, FormEvent } from "react";
import { User, Mail, Phone as PhoneIcon } from "lucide-react";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 11);
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage(null);

    const cleanedPhone = phone.replace(/\D/g, "");

    if (nome.length < 3 || nome.length > 15) {
      setErrorMessage("O nome deve ter entre 3 e 15 caracteres.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      setLoading(false);
      return;
    }

    if (cleanedPhone.length !== 11) {
      setErrorMessage("O telefone deve conter 11 dígitos numéricos.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://envio-de-email-portifolio.onrender.com/impacto360-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, phone: cleanedPhone }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setNome("");
        setEmail("");
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-gray-100 text-sm font-bold mb-2">
              Nome
            </label>
            <div className="flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900 px-5 py-2.5 transition-all duration-200 hover:border-azul-principal focus-within:border-azul-principal">
              <User className="w-4 h-4 text-azul-principal" />
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder="Seu nome"
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">
              E-mail
            </label>
            <div className="flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900 px-5 py-2.5 transition-all duration-200 hover:border-azul-principal focus-within:border-azul-principal">
              <Mail className="w-4 h-4 text-azul-principal" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Seu e-mail"
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-gray-100 text-sm font-bold mb-2">
              Telefone
            </label>
            <div className="flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900 px-5 py-2.5 transition-all duration-200 hover:border-azul-principal focus-within:border-azul-principal">
              <PhoneIcon className="w-4 h-4 text-azul-principal" />
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                placeholder="(XX) XXXXX-XXXX"
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full w-full transition-all duration-300 shadow-md text-sm ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 hover:shadow-lg hover:from-roxo-futurista hover:to-roxo-futurista"
            }`}
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>

          {errorMessage && (
            <p className="text-red-400 text-center mt-4 text-sm">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-green-400 text-center mt-4 text-sm">
              Mensagem enviada com sucesso!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-4 text-sm">
              Ocorreu um erro ao enviar. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contato;
