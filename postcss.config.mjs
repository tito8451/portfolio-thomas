/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Ajoutez Autoprefixer ici pour éviter des erreurs
  },
};

export default config;
