require("discord.js");

module.exports={
  commands: 'directo',
  description: "Permiso Admin",
 callback(message, args){
  if(!message.member.hasPermission('ADMINISTRATOR')) return
     args.join(" ");
     message.delete().catch(() => {});
     message.channel.send(`@everyone Nerekoo esta en directo, ir entrando que empezamos ya! https://www.twitch.tv/nerekoo`);
  }
}
