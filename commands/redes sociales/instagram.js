const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "instagram",
  description: "Mi Perfil de Instagram",
  callback(message) {
    let commands = message.client.commands;

    let Insta = new MessageEmbed()
      .setTitle(`Instagram Nereko`)
      .setThumbnail('https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/s150x150/142581213_461615878190076_985637522715823185_n.jpg?tp=1&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_ohc=UfasEYZw0-IAX-VLXuX&oh=3140fb3acc291aec72b4919c4c38be6b&oe=606E0136')
      .setDescription("https://www.instagram.com/_nereko_/")
      .setColor("#CC6721");

      Insta.setTimestamp();

    return message.channel.send(Insta).catch(console.error);
  }
};