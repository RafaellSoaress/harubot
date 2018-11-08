const { help } = require('../config/config.js');

module.exports = {

  ajuda: (message) => {
    message.reply(help.channelMessage);

    message.author.send(`
      ${'Lista de Comandos'.codeBlock()}

      
    `);

    message.author.send(help.privateMessage);
  },

  ready: async (client) => {
    /** Então exibe uma mensagem avisando que o bot foi inizializado com sucesso. */
    console.log('log', 'O Bot foi iniciado completamente !')
    /** Configuramos para que apareça "Jogando ..." ou "Playing ..." */
    client.user.setPresence({
      status: 'online',
      game: {
        name: process.env.GAME
      }
    })
  }

}
