const { MessageEmbed } = require("discord.js");

module.exports={
    commands:'server',
    description: "Información del Servidor",
    callback(message) {
        let sicon = message.guild.iconURL;
        let serverEmbed = new MessageEmbed()
            .setDescription("Información Servidor")
            .setColor("#ff0000")
            .setThumbnail(sicon)
            .addField("Nombre Servidor", message.guild.name)
            .addField("Creado", message.guild.createdAt)
            .addField("Tu entraste", message.member.joinedAt)
            .addField("Total Miembros", message.guild.memberCount)

        const messagePromise = message.channel.send(serverEmbed);
    },
};