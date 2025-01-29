/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'doctor': "url('./images/doctor.jpg')",
        'background': "url('./images/background.jpg')"
       },
       height: {
        'custom': 'calc(100vh - 145px)',
       }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#72A4E8',       // Blue
          secondary: '#505050',    // Grey
          accent: '#c5d0f4',       // Lightgreyblue
          neutral: '#3d4451',      // Neutral color (default)
        },
      },
    ],
  },
};
