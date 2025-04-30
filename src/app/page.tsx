import React from 'react';
import Hero from '@/app/components/Hero';
import Sobre from '@/app/components/Sobre';
import Servicos from '@/app/components/Servicos';
import FAQ from '@/app/components/FAQ';
import Contato from '@/app/components/Contato';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicos />
      <div className="flex flex-col md:grid md:grid-cols-3 gap-0">
  <div className="md:col-span-2 md:order-1"> {/* PROJETOS ocupa 2 das 3 colunas */}
    <FAQ/>
  </div>
  <div className="md:col-span-1 md:order-2"> {/* CONTATO ocupa 1 das 3 colunas */}
    <Contato />
  </div>
</div>
<Footer />
    </main>
  );
}