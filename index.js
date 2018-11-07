const colors   = require('colors');
const Discord = require('discord.js');

const harubot = new Discord.Client();

const {
  auth: auth_config,
  haru: haru_config,
  activities
} = require('./config/config.js');

const comandos = require('./config/comandos.json');

const eventos   = require('./eventos/index.js');
const constants = require('./config/constants.js');
const utils     = require('./utils/utils.js');
const comandos  = require('./config/comandos.json');

let listaDeComandos = utils.getListaDeComandos(comandos);

//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.log(`

        ${harubot.user.tag} está logada!

    `.cyan);
})

// interação da bot com o pessoal no canal
harubot.on('message', message => {

  constants.palavrasOfensivas.forEach(palavra => {

    const regex = new RegExp(palavra, "gi");

    if(regex.exec(message.content)) {

      message.reply(utils.getRandomResponse(constants.respostas))

      return false;

    }
  })

  listaDeComandos.forEach(comando => {
    if(message.content === haru_config.prefix + comando) {
      return eventos[comando](message);
    }
  })

  // if(message.content === haru_config.prefix + "ajuda") {
  //   eventos.ajuda(message);
  // }

});


//conexao da harubot no canal
harubot.login(auth_config.token);
