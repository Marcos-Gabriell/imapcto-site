import React from 'react';

const Servicos = () => {
  const servicos = [
    { nome: 'Social Media', cor: 'bg-blue-500', icone: 'fa-share-alt' }, // Exemplo de ícone Font Awesome
    { nome: 'Vídeos', cor: 'bg-purple-500', icone: 'fa-play' },
    { nome: 'Flyers', cor: 'bg-pink-500', icone: 'fa-file-image' },
    { nome: 'Branding', cor: 'bg-indigo-500', icone: 'fa-palette' },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">SERVIÇOS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {servicos.map((servico, index) => (
            <div key={index} className={`rounded-lg p-6 ${servico.cor} shadow-md`}>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                {/* Adicione seu ícone aqui (pode ser um componente separado) */}
                <i className={`fas ${servico.icone}`}></i> {/* Exemplo com Font Awesome */}
              </div>
              <h3 className="text-lg font-semibold">{servico.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;