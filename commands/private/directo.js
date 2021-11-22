require("discord.js");

const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "directo",
  description: "Permiso Admin",
  callback(message) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return
    let commands = message.client.commands;

    let Directo = new MessageEmbed()
      .setDescription("@everyone Nerekoo esta en directo, ir entrando que empezamos ya! https://www.twitch.tv/nerekoo")
      .setColor("#4200FF");

      Directo.setTimestamp();

    return message.channel.send(Directo).catch(console.error);
  }
};
