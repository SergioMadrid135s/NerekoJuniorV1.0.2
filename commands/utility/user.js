const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports={
    commands:'user',
    description: "Saber información de tu perfil discord.",
    callback(message) {
        let sicon = message.guild.iconURL;
        let user = new MessageEmbed()
            user.setDescription("Información de tu perfil")
            user.setColor("#ff0000")
            user.setThumbnail(sicon)
            user.addField("Nombre:", message.author.tag)
            user.addField("ID:", message.author.id)
            user.addField("Dia Creación:", message.author.createdAt)
            user.addField("Entrada Servidor:", message.author.joinedAt)
            user.setThumbnail(message.author.displayAvatarURL())

        const messagePromise = message.channel.send(user);
    },
};
