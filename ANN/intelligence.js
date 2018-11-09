const brain = require('brain.js');
const mimir = require('mimir');

const {
  maxArg,
  vecResult
} = require('../utils/utils.js');

const {
  trainingTexts,
  ANNClasses
} = require('./config.json');

const classesArray = Object.keys(ANNClasses);

const dict = mimir.dict(trainingTexts);

const trainData = [
  [mimir.bow(trainingTexts[0], dict), ANNClasses.OFFENSIVE],
  [mimir.bow(trainingTexts[1], dict), ANNClasses.OFFENSIVE],
  [mimir.bow(trainingTexts[2], dict), ANNClasses.NORMAL]
]

const annTrain = trainData.map((pair) => {
  return {
    input  : pair[0],
    output : vecResult(pair[1], 3)
  }
});

module.exports = annTrain;
