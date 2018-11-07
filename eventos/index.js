const { messages } = require('../config/config.js');

module.exports = {

  ajuda: (message) => {
    message.reply('Olá, irei passar uma lista de comandos para você !');
    message.author.send(messages.help.private);

    return 1;
  },

  ready: async (client) => {
    /** Então exibe uma mensagem avisando que o bot foi inizializado com sucesso. */
    console.log('log', 'O Bot foi iniciado completamente !')
    /** Configuramos para que apareça "Jogando ..." ou "Playing ..." */
    client.user.setPresence({ status: 'online', game: { name: process.env.GAME } })
  }

}
