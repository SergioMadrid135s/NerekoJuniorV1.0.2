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
            .addField("Tu Nombre:", message.author.tag)
            .addField("Tu ID:", message.author.id)
            .addField("Dia Creada:", message.author.createdAt)
            .addField("Entrada Servidor:", message.author.joinedAt)
            .setThumbnail(message.author.displayAvatarURL())

        const messagePromise = message.channel.send(serverEmbed);
    },
};
