const colors   = require('colors');
const Discord = require('discord.js');

const harubot = new Discord.Client();

const {
  auth: auth_config,
  haru: haru_config,
  activities
} = require('./config/config.js');

const eventos   = require('./eventos/index.js');
const constants = require('./config/constants.js');
const utils     = require('./utils/utils.js');
const comandos  = require('./config/comandos.json');

/*
  Listener aguardando para a compleição
  dos eventos pré-carregamento.
*/

harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.log(`

        ${harubot.user.tag} está logada!

    `.yellow);
})

/*
  Listener que escuta sempre que uma nova
  mensagem é enviada no canal
*/

harubot.on('message', message => {

  constants.palavrasOfensivas.forEach(palavra => {

    const regex = new RegExp(palavra, "gi");

    if(regex.exec(message.content)) {

      /*
        Retorna uma das mensagens salvas na lista
        de respostas nas constantes.
      */

      message.reply(utils.getRandomResponse(constants.respostas))

      return false;

    }
  })

  utils.getListaDeComandos(comandos).forEach(comando => {
    if(comando.getPrefix() === message.content) {

      /*
        Busca pelo evento relacionado a mensagem
        através do nome passado como comando   ,
        caso exista, então executa a respectiva função
        passando como argumento, o objeto "mensagem"
        do próprio Discord.
      */

      if(eventos[comando]) {
        return eventos[comando](message);
      }

    }
  }

});

/*
  Conexão da Harubot no canal utilizando
  o token como credencial
*/
harubot.login(auth_config.token);
