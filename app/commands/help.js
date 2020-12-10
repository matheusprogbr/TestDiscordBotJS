const { prefix } = require('../config.json');
const commands = require('../scripts/commandsReader')(prefix);

module.exports = async (client, msg) => {
  const botReply = [];
  await msg.reply('Lista de comandos!');
  Object.keys(commands).forEach((key) => {
    botReply.push(`---- ${key}`);
  });
  msg.channel.send(`${botReply.join('\n')}`);
};
