require("discord.js");
module.exports = {
  commands: "say",
  description: "Mandar mensaje con el bot",
 async callback(message, args){
  if(!message.member.hasPermission('ADMINISTRATOR')) return

    const sayMessage = args.join(" ");
    message.delete().catch(() => {});
    message.channel.send(`${sayMessage}`);
  }
}