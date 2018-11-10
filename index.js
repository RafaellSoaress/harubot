const ora    = require('ora');
const colors = require('colors');

const spinner = ora();

spinner.start('Carregando as dependências gerais do projeto...'.yellow);

const Discord = require('discord.js');

const harubot = new Discord.Client();

const {
  auth: auth_config,
  haru: haru_config,
  activities
} = require('./config/config.js');

const constants  = require('./config/constants.js');
const comandos   = require('./config/comandos.json');
const eventos    = require('./eventos/index.js');
const utils      = require('./utils/utils.js');
const db         = require('./database/database.js');
const haru_ia    = require('./ANN/index.js');
const fs         = require('fs');
const path       = require('path');

spinner.succeed('Dependências carregadas com sucesso'.cyan);

/*
  Listener aguardando para a compleição
  dos eventos pré-carregamento.
*/

spinner.start('Aguardando a criação dos listeners...'.yellow);

harubot.on('ready', () => {

    harubot.user.setActivity(activities.league_of_legends);

    console.log(`

        ${harubot.user.tag} está logada!

    `.green);
})

/*
  Listener que escuta sempre que uma nova
  mensagem é enviada no canal
*/

harubot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'member-log');

  if(!channel) return;

  channel.send(`Seja bem vinda(o), ${member}`)

})

harubot.on('message', message => {

  const messageClassification = haru_ia.run(message.content.toLowerCase());

  console.log(messageClassification);

  if(messageClassification === "offensive") {
    message.reply(utils.getRandomResponse(constants.respostas));
  }

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

    // if(message.content[0] === haru_config.prefix) {
    //   return message.reply('A-as coisas não deveriam ser assim ! >.<');
    // }

  })

  // haru_ia.train([{ input: message.content.toLowerCase(), output: messageClassification }]);
  // fs.writeFileSync(path.resolve(path.join(__dirname, './ANN/bayes.json')), JSON.stringify(haru_ia.toJSON()));


/*
passar aqui a estrutura do chuuni
quando for chamado o comando "~chuni"
*/

});

spinner.succeed('Listeners alocados com sucesso.'.cyan);

/*
  Conexão da Harubot no canal utilizando
  o token como credencial.
*/

spinner.start('Autenticando a aplicação no servidor do Discord.'.yellow);
harubot.login(auth_config.token);
spinner.succeed('Aplicação autenticada com sucesso'.cyan);
