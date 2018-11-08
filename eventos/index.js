const { messages } = require('../config/config.js');

module.exports = {

  ajuda: (message) => {
    message.reply(messages.help.channel);
    message.author.send(messages.help.lain);
    message.author.send(messages.help.chuni);
    message.author.send(messages.help.motiva);
    message.author.send(messages.help.jap);
    message.author.send(messages.help.ajuda);

    return 1;
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
