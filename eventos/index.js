const { help } = require('../config/config.js');

module.exports = {

  ajuda: (message) => {
    message.reply(help.channelMessage);
    message.author.send(`${'Lista de Comandos'.codeBlock()}`);
    message.author.send(help.privateMessage);
  },

  ready: async (client) => {
    console.log('log', 'O Bot foi iniciado completamente !')
    client.user.setPresence({ status: 'online', game: { name: process.env.GAME }})
  },

  history: (message) => {
    
  }

}
