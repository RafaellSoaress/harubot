const Discord = require('discord.js');
const harubot = new Discord.Client();


//saber se ela logou mesmo
harubot.on('ready', () => {
    harubot.user.setActivity('League of Legends');
    console.log('logado!');
})

// interação da bot com o pessoal no canal
harubot.on('message', message => {
       

});


//conexao da harubot no canal
harubot.login(auth.token);







