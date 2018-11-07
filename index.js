const Discord = require('discord.js');
const harubot = new Discord.Client();

const config  = require('./config/config.js');

const auth_config = config.auth;
const haru_config = config.haru;
const activities  = config.activities;

const eventos   = require('./eventos/index.js');
const constants = require('./config/constants.js');
const utils     = require('./utils/utils.js');

//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.log(`${harubot.user.tag} está logada!`);
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

  if(message.content === haru_config.prefix + "ajuda") {
    eventos.ajuda(message);
  }

});


//conexao da harubot no canal
harubot.login(auth_config.token);
