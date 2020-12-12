const { channels, text } = require('../config.json');

module.exports = async (member) => {
  const welcomeChannel = await member.guild.channels.cache.find(
    (channel) => channel.id === channels.boasVindas
  );
  welcomeChannel.send(`${member.user} ${text.remove}`);
};
