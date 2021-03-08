module.exports={
  commands: 'ping',
  description: "Comprueba el ping del bot",
  callback: (message) => {
      message.channel.send(`🏓 | Latencia es: **${Date.now() - message.createdTimestamp}ms.**`);
  },
};