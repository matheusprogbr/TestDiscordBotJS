const fs = require('fs');

const dir = './app/commands/';
const reqDir = '../commands/';

module.exports = (prefix) => {
  const commands = {};
  const scripts = fs.readdirSync(dir);

  scripts.forEach((script) => {
    const filename = script.split('.')[0];
    commands[prefix + filename] = require(reqDir + script);
  });

  return commands;
};
