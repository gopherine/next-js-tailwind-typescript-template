const { allowedStatusCodes } = require("next/dist/lib/load-custom-routes");

// tailwind.config.js
module.exports = {
    purge: {
    mode: 'all',
    content:[
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.jsx'
    ]},
    theme: {},
    variants: {},
    plugins: [
    ],
  }