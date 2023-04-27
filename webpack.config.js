const path = require('path');

let MODE = process.env.MODE;
console.log('MODE :', MODE);
if (!['production', 'development'].includes(MODE)) {
  MODE = 'production'
}



module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  }
}
