/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagen-main': "url('https://www.shopify.com/stock-photos/home?utm_campaign=photo_credit&amp;utm_content=Browse+Free+HD+Images+of+Livingroom+Tray+With+Plant+And+Game+Controllers&amp;utm_medium=referral&amp;utm_source=credit')",
        'imagen-servicio-1': 'url("https://images.pexels.com/photos/4567339/pexels-photo-4567339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'imagen-servicio-2': 'url("https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'imagen-servicio-3': 'url("https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'imagen-servicio-4': 'url("https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'imagen-servicio-5': 'url("https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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


