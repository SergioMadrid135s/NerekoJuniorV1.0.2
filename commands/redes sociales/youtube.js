const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "youtube",
  description: "Mi perfil de Youtube",
  callback(message) {
    let commands = message.client.commands;

    let Youtube = new MessageEmbed()
      .setTitle(`Youtube Nereko`)
      .setDescription("https://www.youtube.com/channel/UCG6NmtUZBMU4D1NRU3S6Qdg/videos?view_as=subscriber")
      .setColor("#c4302b");

      Youtube.setTimestamp();

    return message.channel.send(Youtube).catch(console.error);
  }
};
