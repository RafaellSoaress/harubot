// DEIXAR PRA DEPOIS

const comandos = require('./comandos.json');

module.exports = {

  ajuda: {
    comando : "~ajuda",
    hint    : comandos.getListaDeComandos.map(comando => {
      return `${comando.getPrefix()}: ${comandos[comando].desc}`
    })
  }

}
