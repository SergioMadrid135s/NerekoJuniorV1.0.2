const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "help",
  aliases: ["h"],
  description: "Muestra todos los comandos y descripciones",
  callback(message) {
    let commands = message.client.commands;

    let help = new MessageEmbed()
      .setTitle(`Comandos de NerekoJunior`)
      .setThumbnail('https://images-ext-2.discordapp.net/external/nYTDfPFgvtFst8FwYGxvtC1jBJVlBkaFH9YlpIgabNk/%3Fsize%3D1024/https/cdn.discordapp.com/icons/777988362921443368/6409c8b8c634a4167e95902597c315e8.png')
      .setDescription("Lista de Comandos")
      .setURL('https://github.com/SergioMadrid135s')
      .addField(` ------------------------------ Redes Sociales ---------------------------`)
      .addField(`→ { prefix }instagram`, `Mi perfil de Instagram.`, true)
      .addField(`→ { prefix }twitter`, `Mi perfil de Twitter.`, true)
      .addField(`→ { prefix }twitch`, `Mi perfil de Twitch.`, true)
      .addField(`→ { prefix }youtube`, `Mi canal de Youtube.`, true)
      .addField(` ----------------------------- Utilidades Twitch --------------------------`)
      .addField(`→ { prefix }cofres`, `Mi colección de cofres.`)
      .addField(` ------------------------------- Utilidades Bot ------------------------`)
      .addField(`→ { prefix }ping`, `Comprueba la latencia del bot.`)
      .addField(`→ { prefix }user`, `Saber información de tu perfil discord.`)
      .addField(`→ { prefix }server`, `Saber información del server.`)
      .addField(`→ { prefix }avatar`, `Conseguir tu foto o de otro usuario.`)
      .addField(`→ { prefix }meme`, `Envia un meme aleatorio.`)
      .addField(`→ { prefix }creador`, `Usuario del creador del bot.`)
      .addField(`→ { prefix }dueña`, `Usuario de dueño del server.`)
      .setFooter("Pedido por" + message.author.tag)
      .setColor("#4900FF");


    help.setTimestamp();

    return message.channel.send(help).catch(console.error);
  }
};
