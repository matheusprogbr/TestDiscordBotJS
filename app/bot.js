require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

const docReply = [
  'It looks like you said DOCUMENTATION!?!?!?!',
  'You might find something useful in these links:',
  'https://discordjs.guide/',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content.includes('documentation')) {
    msg.reply(docReply);
  }
});

client.login(process.env.BOT_TOKEN);
