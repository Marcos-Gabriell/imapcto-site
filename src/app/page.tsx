import React from 'react';
import Hero from '@/app/components/Hero';
import Sobre from '@/app/components/Sobre';
import Servicos from '@/app/components/Servicos';
import FAQ from '@/app/components/FAQ';
import Contato from '@/app/components/Contato';
import Footer from '@/app/components/Footer';
import FeedbackButton from '@/app/components/FeedbackButton'

export default function Home() {
  return (
    <main>
  <section id="home">
    <Hero />
  </section>

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