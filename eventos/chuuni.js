//Aqui deverá começar com uma mensagem junto da estrutura de escolha



function hisChuu() {

  const hist = 'historia;
  const x    = 'x1';



  if(message.content === hist) {
    return hist;
  } else if (message.content === x) {
    return x;
  } else if (message.content != x && message.content != hist) {
    message.channel.send('As coisas não deveriam ser assim ! >.<');
  } else {
    return null;
  }

  return null;
};


/*
ai aqui será chamado a função de cima caso caia hist na escolha
passando pra ca mais uma estrutura de controle pra saber se
o usuario vai querer ler ou mandar uma historia chuunibyou
*/

function xisum() {

  hisChuu.x();




}
