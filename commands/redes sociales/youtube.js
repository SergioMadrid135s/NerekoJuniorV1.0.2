const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "youtube",
  description: "Mi perfil de Youtube",
  callback(message) {
    let commands = message.client.commands;

    let Youtube = new MessageEmbed()
      .setTitle(`Youtube Nereko`)
      .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwngsG_cVpzIe7yxEEDClOQMNyyhO3X73zW6r6EDAxg=s900-c-k-c0x00ffffff-no-rj')
      .setDescription("https://www.youtube.com/channel/UCG6NmtUZBMU4D1NRU3S6Qdg/videos?view_as=subscriber")
      .setColor("#c4302b");

      Youtube.setTimestamp();

    return message.channel.send(Youtube).catch(console.error);
  }
};