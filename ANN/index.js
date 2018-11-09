const brain = require('brain.js');
const intel = require('./intelligence.js');

const {
  maxArg,
  vecResult
} = require('../utils/utils.js');

const {
  ANNClasses
} = require('./config.json');

const classesArray = Object.keys(ANNClasses);

const ann = new brain.NeuralNetwork();

// Faltam dados para treino.
ann.train(intel);

// const predict = ann.run('ofensivo')
// console.log(predict);
// console.log(classesArray[maxArg(predict)]);
// console.log(classesArray[maxArg(ann.run('teste'))]);

module.exports = ann;

// Referência talvez útil https://www.npmjs.com/package/classificator
