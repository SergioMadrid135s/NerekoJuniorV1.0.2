const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "instagram",
  description: "Mi Perfil de Instagram",
  callback(message) {
    let commands = message.client.commands;

    let Insta = new MessageEmbed()
      .setTitle(`Instagram Nereko`)
      .setDescription("https://www.instagram.com/_nereko_/")
      .setColor("#CC6721");

      Insta.setTimestamp();

    return message.channel.send(Insta).catch(console.error);
  }
};
