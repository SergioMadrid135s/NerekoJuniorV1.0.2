const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "dueña",
  description: "Dueña",
  callback(message) {
    let commands = message.client.commands;

    let Dueña = new MessageEmbed()
      .setTitle(`Dueña`)
      .setThumbnail('https://cdn.discordapp.com/avatars/502933541290639360/6b65c207e4674701c147d61aea42e64f.png?size=1024')
      .setDescription('Dueña de **"El rincon de Nereko"**')
      .addField(`Mi Discord`, `Nereko#5561`, true)
      .setColor("#b9a3e3");

      Dueña.setTimestamp();

    return message.channel.send(Dueña).catch(console.error);
  }
};