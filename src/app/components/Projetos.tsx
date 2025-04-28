import React from 'react';

const Projetos = () => {
  const projetos = [
    { imagem: '/images/projeto1.jpg' }, // Substitua pelos seus caminhos de imagem
    { imagem: '/images/projeto2.jpg' },
    { imagem: '/images/projeto3.jpg' },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">PROJETOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projetos.map((projeto, index) => (
            <div key={index} className="relative overflow-hidden rounded-md shadow-md">
              <img src={projeto.imagem} alt={`Projeto ${index + 1}`} className="w-full h-auto block" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="text-sm font-semibold">Trabalho ou caso de sucesso</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;