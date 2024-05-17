/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagen-main': "url('https://www.shopify.com/stock-photos/home?utm_campaign=photo_credit&amp;utm_content=Browse+Free+HD+Images+of+Livingroom+Tray+With+Plant+And+Game+Controllers&amp;utm_medium=referral&amp;utm_source=credit')",
        'imagen-servicio-1': 'url("https://cdn.pixabay.com/photo/2014/08/26/21/27/service-428539_1280.jpg")',
        'imagen-servicio-2': 'url("https://images.unsplash.com/photo-1620368523635-df9d83338fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw2fHxDb21wdXRlciUyMFJlcGFpcnxlbnwwfHx8fDE3MDY4MjI1OTN8MA&ixlib=rb-4.0.3&q=80&w=1080")',
        'imagen-servicio-3': 'url("https://images.unsplash.com/photo-1604754742629-3e5728249d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyfHxDb21wdXRlciUyMFJlcGFpcnxlbnwwfHx8fDE3MDY4MjI1OTN8MA&ixlib=rb-4.0.3&q=80&w=1080")',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '800px': '800px',
        '900px': '900px',
        '850px': '850px',
        '1000px': '1000px',
      },
    },
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
