const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "twitch",
  description: "Mi perfil de Twitch",
  callback(message) {
    let commands = message.client.commands;

    let Twitch = new MessageEmbed()
      .setTitle(`Twitch Nereko`)
      .setThumbnail('https://images-ext-1.discordapp.net/external/xPxIuYtAJnrHww0rjZVFAdCMhybXLOejyNNt15kgDok/https/pbs.twimg.com/profile_images/1355547041573826564/T2b41Tv__bigger.jpg')
      .setDescription("https://www.twitch.tv/nerekoo")
      .setColor("#6441a5");

      Twitch.setTimestamp();

    return message.channel.send(Twitch).catch(console.error);
  }
};