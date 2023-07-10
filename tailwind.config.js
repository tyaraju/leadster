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
      spacing: {
        '5px': '5px',
        '18px': '18px',
        '42px': '42px',
        '160px': '160px',
      },
      colors: {
        'blue-primary': '#2C83FB',
        'blue-secondary': '#F0F8FF'
      },
      fontFamily: {
        'JakartaSans': ['Jakarta Sans'],
        'JakartaSansMedium': ['Jakarta Sans Medium'],
        'JakartaSansBold': ['Jakarta Sans Bold'],
        'JakartaSansExtraBold': ['Jakarta Sans Extra Bold'],
      },
      borderRadius: {
        'large': '20px',
      }
    },
  },
  plugins: [],
}
