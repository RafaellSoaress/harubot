// const { haru: haru_config } = require('../config/config.js');

const prefix = '~'

Array.prototype.getPrefix = function() {
  return this.map(item => prefix + item);
}

String.prototype.getPrefix = function() {
  return prefix + this;
}

String.prototype.makeBold = function() {
  return `__***${this}***__`;
}

String.prototype.codeBlock = function() {
  return '```' + this  + '```';
}

module.exports = {

  getRandomResponse: (responses) =>
    responses[Math.floor(Math.random() * responses.length)],

  getListaDeComandos: (comandos) =>
    Object.keys(comandos),

  getListaDeComandosComPrefixo: (comandos) =>
    this.getListaDeComandos(comandos).getPrefix(),

  vecResult: (res, num_classes) => {

    const vec = [];

    for(let i = 0; i < num_classes; i++) {
      vec.push(0);
    }

    vec[res] = 1;
    return vec;

  },

  maxArg: (arr) => arr.indexOf(Math.max.apply(Math, arr))

}
