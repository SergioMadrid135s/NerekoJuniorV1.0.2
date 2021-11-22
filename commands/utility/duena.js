const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "dueña",
  description: "Dueña",
  callback(message) {
    let commands = message.client.commands;

    let Dueña = new MessageEmbed()
      .setTitle(`Dueña`)
      .setDescription('Dueña de __"El rincon de Nereko"__')
      .addField(`Mi Discord`, `Nereko#5561`, true)
      .setColor("#b9a3e3");

      Dueña.setTimestamp();

    return message.channel.send(Dueña).catch(console.error);
  }
};
