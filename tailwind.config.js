/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-principal': '#3490dc',
        'cinza-claro': '#f7f7f7',
        'preto-profundo': '#000000',
        'branco-neutro': '#FFFFFF',
        'roxo-futurista': '#7F00FF',
        'azul-tech': '#007bff', // Adicione a cor azul tech aqui
        'rosa-medio': '#FF69B4', // Adicione a cor rosa médio aqui
        // fuchsia-600 já existe no Tailwind padrão
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      fontFamily: {
        'corpo': ['"Open Sans"', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};