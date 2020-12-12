module.exports = (client, msg) => {
  const args = msg.content.split(' ');
  msg.reply(
    `Comando ${args[0]} não existe!\nDigite !help ou !ajuda para a lista de comandos`
  );
};
