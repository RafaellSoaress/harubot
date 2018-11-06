const Discord = require('discord.js');
const harubot = new Discord.Client();

const config  = require('./config/config.js');

const auth_config = config.auth;
const haru_config = config.haru;
const activities  = config.activities;

const ajuda = require('./eventos/ajuda.js')

//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity(activities.league_of_legends);
    console.log('logado!');
})

// interação da bot com o pessoal no canal
harubot.on('message', message => {

  if(message.content === haru_config.prefix + "ajuda") {
    message.channel.reply(pedidoAjuda);
  }


});


//conexao da harubot no canal
harubot.login(auth_config.token);
