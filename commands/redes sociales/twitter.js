const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitter",
  description: "Mi perfil de Twitter",
  callback(message) {
    let commands = message.client.commands;

    let twitter = new MessageEmbed()
      twitter.setTitle(`Twitter Nereko`)
      twitter.setDescription("https://twitter.com/Nereko2")
      twitter.setColor("#00acee");

      twitter.setTimestamp();

    return message.channel.send(twitter).catch(console.error);
  }
};
