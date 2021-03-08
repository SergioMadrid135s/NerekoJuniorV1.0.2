require("discord.js");

module.exports={
  commands: 'directo',
  description: "Permiso Admin",
 callback(message, args){
  if(!message.member.hasPermission('ADMINISTRATOR')) return
     args.join(" ");
     message.delete().catch(() => {});
     message.channel.send(`Estoy en directo gente! Iros uniendo https://www.twitch.tv/nerekoo @everyone`);
  }
}