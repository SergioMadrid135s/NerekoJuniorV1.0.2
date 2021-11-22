const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitter",
  description: "Mi perfil de Twitter",
  callback(message) {
    let commands = message.client.commands;

    let Twitter = new MessageEmbed()
      .setTitle(`Twitter Nereko`)
      .setDescription("https://twitter.com/Nereko2")
      .setColor("#00acee");

      Twitter.setTimestamp();

    return message.channel.send(Twitter).catch(console.error);
  }
};
