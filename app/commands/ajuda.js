const { prefix } = require('../config.json');
const commands = require('../scripts/commandsReader')(prefix);

const description = {
  '!ping': 'Uma brincadeira do bot',
  '!ajuda': 'Lista todos os comandos e suas descrições!',
  '!aviso':
    'Manda no canal de avisos a mensagem enviada após declarar o comando.',
  '!clear': 'Limpa as ultimas mensagens do chat de até 14 dias',
  '!help': 'Lista apenas os comandos',
};
module.exports = (client, msg) => {
  let text = 'Lista de comandos: ';

  Object.keys(commands).forEach((key) => {
    text += `\n${key}: ${
      description[key] ? description[key] : 'Não tem descrição'
    }`;
  });
  msg.channel.send(text);
};
