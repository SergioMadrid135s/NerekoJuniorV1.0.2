const Discord = require('discord.js');
module.exports = {
    commands: "avatar",
    description: "Conseguir tu foto o de otro usuario",

    async callback(message){

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar del usuario __*${member.username}*__`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}
