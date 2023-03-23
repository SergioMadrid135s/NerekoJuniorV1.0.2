const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitch",
  description: "Mi perfil de Twitch",
  callback(message) {
    let commands = message.client.commands;

    let twitch = new MessageEmbed()
      twitch.setTitle(`Twitch Nereko`)
      twitch.setDescription("https://www.twitch.tv/nerekoo")
      twitch.setColor("#6441a5");

      twitch.setTimestamp();

    return message.channel.send(Twitch).catch(console.error);
  }
};
