const bayes     = require('classificator');
const ia_config = require('./config.json');

const fs        = require('fs');
const path      = require('path');
const ora       = require('ora');

const intel_path = path.resolve(path.join(__dirname, './bayes.json'));

let classifier;
const spinner = ora();

if (fs.statSync(intel_path).size == 0) {
  spinner.start('Carregando o módulo classificador...');
  classifier = bayes();
  spinner.succeed('Módulo classificador carregado com sucesso.');
} else {
  console.log('Carregando o módulo classificador através de', intel_path);
  const intel = fs.readFileSync(intel_path);
  classifier = bayes.fromJson(JSON.parse(intel));
  spinner.succeed('Módulo classificador carregado com sucesso.');
}

// const classifier = bayes();

const items = ia_config.trainingMessages;

for(let x in items) {
  if(typeof items[x] === 'object') {
    classifier.learn(items[x].message, items[x].classification)
  }
}

module.exports = classifier;
// Referência talvez útil https://www.npmjs.com/package/classificator
