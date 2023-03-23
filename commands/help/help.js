const { prefix } = require('../../config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "help",
  aliases: ["h"],
  description: "Muestra todos los comandos y descripciones",
  callback(message) {
    let commands = message.client.commands;

    let ayuda = new MessageEmbed()
      ayuda.setTitle(`Comandos de NerekoJunior`)
      ayuda.setThumbnail('https://images-ext-2.discordapp.net/external/nYTDfPFgvtFst8FwYGxvtC1jBJVlBkaFH9YlpIgabNk/%3Fsize%3D1024/https/cdn.discordapp.com/icons/777988362921443368/6409c8b8c634a4167e95902597c315e8.png')
      ayuda.setDescription("Lista de Comandos")
      ayuda.setURL('https://github.com/SergioMadrid135s')
      ayuda.addField(` ------------------------------ Redes Sociales ---------------------------`)
      ayuda.addField(`→ { prefix }instagram`, `Mi perfil de Instagram.`, true)
      ayuda.addField(`→ { prefix }twitter`, `Mi perfil de Twitter.`, true)
      ayuda.addField(`→ { prefix }twitch`, `Mi perfil de Twitch.`, true)
      ayuda.addField(`→ { prefix }youtube`, `Mi canal de Youtube.`, true)
      ayuda.addField(` ----------------------------- Utilidades Twitch --------------------------`)
      ayuda.addField(`→ { prefix }cofres`, `Mi colección de cofres.`)
      ayuda.addField(` ------------------------------- Utilidades Bot ------------------------`)
      ayuda.addField(`→ { prefix }ping`, `Comprueba la latencia del bot.`)
      ayuda.addField(`→ { prefix }user`, `Saber información de tu perfil discord.`)
      ayuda.addField(`→ { prefix }server`, `Saber información del server.`)
      ayuda.addField(`→ { prefix }avatar`, `Conseguir tu foto o de otro usuario.`)
      ayuda.addField(`→ { prefix }meme`, `Envia un meme aleatorio.`)
      ayuda.addField(`→ { prefix }creador`, `Usuario del creador del bot.`)
      ayuda.addField(`→ { prefix }dueña`, `Usuario de dueño del server.`)
      ayuda.setFooter("Pedido por" + message.author.tag)
      ayuda.setColor("#4900FF");


    ayuda.setTimestamp();

    return message.channel.send(ayuda).catch(console.error);
  }
};
