const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "youtube",
  description: "Mi perfil de Youtube",
  callback(message) {
    let commands = message.client.commands;

    let youtube = new MessageEmbed()
      youtube.setTitle(`Youtube Nereko`)
      youtube.setDescription("https://www.youtube.com/channel/UCG6NmtUZBMU4D1NRU3S6Qdg/videos?view_as=subscriber")
      youtube.setColor("#c4302b");

      youtube.setTimestamp();

    return message.channel.send(youtube).catch(console.error);
  }
};
