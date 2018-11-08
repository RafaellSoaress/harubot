// DEIXAR PRA DEPOIS

const comandos = require('./comandos.json');
const utils    = require('../utils/utils.js');

module.exports = {

  command        : "~ajuda",
  channelMessage : "olá!, vou mandar uma lista de comandos pra você.",
  privateMessage :  utils.getListaDeComandos(comandos)
                    .map(comando => `${comando.getPrefix().makeBold()} → ${comandos[comando].desc}`)
}
