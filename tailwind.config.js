module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'white-landing': 'url(../assets/images/bg-image.jpg)',
      },
      colors: {
        'hero-overlay': 'rgba(0, 0, 0, .6)',
        'hero-overlay-dark': 'rgba(0, 0, 0, .6)',
        'dark-mode-blue': '#121212',
      },
      dropShadow: {
        '3xl': '0 0 5px rgba(209, 114, 19, 1)',
      },
      boxShadow: {
        '3xl': '1px 2px 10px 5px rgba(61,61,61,0.73)',
      },
      spacing: {
        '10rem': '28rem',
      },
      keyframes: {
        typing: {
          from: '{ width: 0 }',
          to: '{ width: 100% }',
        },
        blinking: {
          from: '{ border-color: transparent }',
          to: '{ border-color: green; }',
        },
      },
      height: {
        128: '50rem',
        '50vh': '50vh',
      },
      width: {
        115: '35rem',
        120: '40rem',
        128: '41rem',
      },
    },
  },
  plugins: [],
};
