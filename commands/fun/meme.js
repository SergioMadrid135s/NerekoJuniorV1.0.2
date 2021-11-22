const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  commands: "meme",
  description: "Para darte un meme aleatorio!",
  async callback(message){
    if(!message.member.hasPermission('SEND_MESSAGES')) return
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`Meme proveniente de r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    await message.channel.send(Embed);
  },
};
