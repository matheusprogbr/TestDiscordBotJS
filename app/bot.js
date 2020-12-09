require('dotenv').config();
const Discord = require('discord.js');

const prefix = '!';
const commands = require('./scripts/commandsReader')(prefix);

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.author.bot) return console.log('It is my message ~bot');
  const args = msg.content.split(' ');

  if (commands[args[0]]) commands[args[0]](client, msg);
});

client.login(process.env.BOT_TOKEN);
