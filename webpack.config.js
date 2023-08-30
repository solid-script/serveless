const path = require('path');

module.exports = {
  entry: {
    autoType: './javascript/autotype/AutoType.js',
    //otroArchivo: './src/otroArchivo.js',
    // Agrega más entradas según sea necesario
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};
