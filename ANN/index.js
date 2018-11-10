const brain     = require('brain.js');
const ia_config = require('./config.json');

const fs        = require('fs');
const path      = require('path');
const ora       = require('ora');
const colors    = require('colors');
const util      = require('util');

const spinner = ora();

const intel_path = path.resolve(path.join(__dirname, './bayes.json'));
let haru_ia      = new brain.recurrent.LSTM();

if (fs.statSync(intel_path).size == 0) {

  spinner.start('Iniciando o treinamento do modelo de rede neural da Haru...\n'.yellow);

  haru_ia.train(ia_config.trainingMessages, {
    iterations: 100,
    errorThresh: 0.005,
    log: (log) => console.info('\t' + log.green),
    logPeriod: 10,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity
  });

  const json = util.inspect(haru_ia.toJSON())

  fs.writeFileSync(intel_path, json, 'utf-8');

  spinner.succeed('Treinamento concluído e dados salvos em '.cyan + intel_path);

} else {

  spinner.start('Carregando a inteligência da Haru através de '.yellow + intel_path);

  const json = JSON.parse(fs.readFileSync(intel_path, 'utf-8'));

  haru_ia = haru_ia.fromJSON(json);

  spinner.succeed('Rede Neural carregada'.cyan);

}


module.exports = haru_ia;

// Referência talvez útil https://www.npmjs.com/package/classificator
