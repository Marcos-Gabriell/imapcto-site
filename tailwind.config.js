/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}", // Ajuste se sua estrutura for diferente
      "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Ajuste se sua estrutura for diferente
      "./components/**/*.{js,ts,jsx,tsx,mdx}", // Ajuste se sua estrutura for diferente
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // Remova se não usar a pasta 'src'
    ],
    theme: {
      extend: {
        colors: {
          'azul-principal': '#3490dc',
          'cinza-claro': '#f7f7f7',
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