const { MessageEmbed } = require("discord.js");

module.exports={
    commands:'server',
    description: "Información del Servidor",
    callback(message) {
        let sicon = message.guild.iconURL;
        let server = new MessageEmbed()
            server.setDescription("Información Servidor")
            server.setColor("#ff0000")
            server.setThumbnail(sicon)
            server.addField("Nombre", message.guild.name)
            server.addField("Creado", message.guild.createdAt)
            server.addField("Entrada", message.member.joinedAt)
            server.addField("Total Miembros", message.guild.memberCount)

        const messagePromise = message.channel.send(server);
    },
};
