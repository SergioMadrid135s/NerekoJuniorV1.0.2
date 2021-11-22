const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitch",
  description: "Mi perfil de Twitch",
  callback(message) {
    let commands = message.client.commands;

    let Twitch = new MessageEmbed()
      .setTitle(`Twitch Nereko`)
      .setDescription("https://www.twitch.tv/nerekoo")
      .setColor("#6441a5");

      Twitch.setTimestamp();

    return message.channel.send(Twitch).catch(console.error);
  }
};
