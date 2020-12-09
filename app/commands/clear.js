module.exports = async (client, msg) => {
  const fetchMsg = await msg.channel.messages.fetch();
  await msg.channel.bulkDelete(fetchMsg);
  msg.reply('Fiz a limpeza geral do chat! :)');
};
