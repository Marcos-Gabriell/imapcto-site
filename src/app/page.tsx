'use client';

import { useState } from 'react';
import Hero from '@/app/components/Hero';
import Sobre from '@/app/components/Sobre';
import Servicos from '@/app/components/Servicos';
import FAQ from '@/app/components/FAQ';
import Contato from '@/app/components/Contato';
import Footer from '@/app/components/Footer';
import FeedbackButton from '@/app/components/FeedbackButton';
import ContatoModal from '@/app/components/ContatoModal'; // certifique-se de importar

export default function Home() {
  const [isContatoOpen, setIsContatoOpen] = useState(false);

  return (
    <main>
      <section id="home">
        <Hero onOpenContato={() => setIsContatoOpen(true)} />
      </section>

      <ContatoModal
        isOpen={isContatoOpen}
        onClose={() => setIsContatoOpen(false)}
      />

      <section id="sobre">
        <Sobre />
      </section>

      <section id="servicos">
        <Servicos />
      </section>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-0">
        <section id="projetos" className="md:col-span-2 md:order-1">
          <FAQ />
        </section>
        <section id="contato" className="md:col-span-1 md:order-2">
          <Contato />
        </section>
      </div>

      <Footer />
      <FeedbackButton />
    </main>
  );
}
