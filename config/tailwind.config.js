// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Verzeichnisse und Dateien, in denen Tailwind genutzt wird
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF', // Beispiel für deinen Akzentfarbton
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
