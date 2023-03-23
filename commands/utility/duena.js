const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "dueña",
  description: "Dueña",
  callback(message) {
    let commands = message.client.commands;

    let dueña = new MessageEmbed()
      dueña.setTitle(`Dueña`)
      dueña.setDescription('Dueña de __"El rincon de Nereko"__')
      dueña.addField(`Mi Discord`, `Nereko#5561`, true)
      dueña.setColor("#b9a3e3");

      dueña.setTimestamp();

    return message.channel.send(dueña).catch(console.error);
  }
};
