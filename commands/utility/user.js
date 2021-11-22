const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports={
    commands:'user',
    description: "Saber información de tu perfil discord.",
    callback(message) {
        let sicon = message.guild.iconURL;
        let serverEmbed = new MessageEmbed()
            .setDescription("Información de tu perfil")
            .setColor("#ff0000")
            .setThumbnail(sicon)
            .addField("Nombre:", message.author.tag)
            .addField("ID:", message.author.id)
            .addField("Dia Creación:", message.author.createdAt)
            .addField("Entrada Servidor:", message.author.joinedAt)
            .setThumbnail(message.author.displayAvatarURL())

        const messagePromise = message.channel.send(serverEmbed);
    },
};
