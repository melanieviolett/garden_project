/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'deep-green':'#041C02',
        'coral':'#CD625A',
        'medium-green':'#4c8558',
        'light-pink': '#E0AFA5',
        'light-yellow': '#FBDD99'
      },
      screens: {
        'surface-pro':'1114px',
        'brk-special': '1306px'
      },
    },
  },
  plugins: [],
}
