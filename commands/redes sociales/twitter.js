const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitter",
  description: "Mi perfil de Twitter",
  callback(message) {
    let commands = message.client.commands;

    let Twitter = new MessageEmbed()
      .setTitle(`Twitter Nereko`)
      .setThumbnail('https://images-ext-1.discordapp.net/external/xPxIuYtAJnrHww0rjZVFAdCMhybXLOejyNNt15kgDok/https/pbs.twimg.com/profile_images/1355547041573826564/T2b41Tv__bigger.jpg')
      .setDescription("https://twitter.com/Nereko2")
      .setColor("#00acee");

      Twitter.setTimestamp();

    return message.channel.send(Twitter).catch(console.error);
  }
};