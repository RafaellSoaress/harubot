const Discord = require('discord.js');
const harubot = new Discord.Client();

const config    = require('./config/config.js');
const constants = require('./config/constants.js');

const auth_config = config.auth;
const haru_config = config.haru;
const activities  = config.activities;


//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.info(`${harubot.user.tag} está pronta!`);
})

// interação da bot com o pessoal no canal
harubot.on('message', message => {

  constants.palavrasOfensivas.every(palavra => {

    if(message.content.includes(palavra)) {
      message.chanel.reply(getRandomResponse(constants.respostas));

      return false;

    };

  });

  // return author.message.content();

});


//conexao da harubot no canal
harubot.login(auth_config.token);
