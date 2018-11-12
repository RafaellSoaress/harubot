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
    message.reply('a mim, poderes especiais foram concedidas pela deusa Akemi, tenho a missão de te ajudar a entender as histórias ou de julgar as batalhas de poder neste grupo ! Então, o que será ? >:3')
    message.channel.send(`${'Lista de Comandos:'.codeBlock()}`);
    message.channel.send([
      `${'~ler'.makeBold()} → 'então você quer que eu leia alguma historinha, tudo bem ! Mas me diga qual devo ler ?' `,
      `${'~guardar'.makeBold()} → 'irei ler as suas histórinhas, então conte-me tudo, tudo bem ?' `,
      `${'~h.ler <n>'.makeBold()} → 'quando eu mandar a lista que você fez de historinha, você escolhe uma e eu leio ela ! :3'`
    ])
  },

  ler: (message) => {
    message.reply('yoooshaa~~ vou ler a histórinha que você me pedir ! >:3  ');
  },

  guardar: (message) => {
    message.reply('vai querer me contar uma histórinha, tudo bem, me conte uma boa história !');
  },


  x1: (message) => {
    message.reply('a mim, poderes arbitrários foram me concedidos para assistir e ver quem dos dois nesse embate vencerá !');




  },

  motivar: (message) => {


  }


}
