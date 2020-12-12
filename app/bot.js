require('dotenv').config();
const Discord = require('discord.js');

const { prefix, activity } = require('./config.json');
const commands = require('./scripts/commandsReader')(prefix);
const unknownCommand = require('./scripts/unknownCommand');
const memberAdd = require('./scripts/memberAdd');
const memberRemove = require('./scripts/memberRemove');

console.log(commands);

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({
    activity,
    status: 'online',
  });
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  const args = msg.content.split(' ');
  if (commands[args[0]]) commands[args[0]](client, msg);
  else if (args[0].startsWith(prefix)) unknownCommand(client, msg);
});

client.on('guildMemberAdd', memberAdd);

client.on('guildMemberRemove', memberRemove);

client.login(process.env.BOT_TOKEN);
