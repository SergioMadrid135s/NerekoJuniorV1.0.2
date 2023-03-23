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
    const meme = new MessageEmbed()
      meme.setTitle(`Meme proveniente de r/${subreddit}`)
      meme.setURL(`https://reddit.com/r/${subreddit}`)
      meme.setColor("RANDOM")
      meme.setImage(img);
    await message.channel.send(meme);
  },
};
