import React from 'react';
import Hero from '@/app/components/Hero';
import Sobre from '@/app//components/Sobre';
import Servicos from '@/app/components/Servicos';
import Projetos from '@/app/components/Projetos';
import Contato from '@/app/components/Contato';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Contato />
    </main>
  );
}