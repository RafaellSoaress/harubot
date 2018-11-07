const { haru: haru_config } = require('../config/config.js');

Array.prototype.getPrefix = function() {
  return this.map(item => haru_config.prefix + item);
}

String.prototype.getPrefix = function() {
  return haru_config.prefix + this;
}

module.exports = {

  getRandomResponse: (responses) =>
    responses[Math.floor(Math.random() * responses.length)],

  getListaDeComandos: (comandos) =>
    Object.keys(comandos),

  getListaDeComandosComPrefixo: (comandos) =>
    this.getListaDeComandos(comandos).getPrefix()

}
