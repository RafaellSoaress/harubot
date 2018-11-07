Array.prototype.getPrefix = function() {
  return this.map(item => "~" + item);
}

String.prototype.getPrefix = function() {
  return haru_config.prefix + this;
}

module.exports = {

  getRandomResponse: (responses) => {
   return responses[Math.floor(Math.random() * responses.length)];
  },

  getListaDeComandos: (comandos) => {
    return Object.keys(comandos);
  }

}
