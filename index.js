const Discord = require('discord.js');
const harubot = new Discord.Client();

const config  = require('./config/config.js');

const auth_config = config.auth;
const haru_config = config.haru;
const activities  = config.activities;

const eventos = require('./eventos/index.js');

//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.log(`${harubot.user.tag} está logada!`);
})

// interação da bot com o pessoal no canal
harubot.on('message', message => {

  if(message.content === haru_config.prefix + "ajuda") {
    eventos.ajuda(message);
  }

});


//conexao da harubot no canal
harubot.login(auth_config.token);
