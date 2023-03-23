const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "instagram",
  description: "Mi Perfil de Instagram",
  callback(message) {
    let commands = message.client.commands;

    let insta = new MessageEmbed()
      insta.setTitle(`Instagram Nereko`)
      insta.setDescription("https://www.instagram.com/_nereko_/")
      insta.setColor("#CC6721");

      insta.setTimestamp();

    return message.channel.send(Insta).catch(console.error);
  }
};
