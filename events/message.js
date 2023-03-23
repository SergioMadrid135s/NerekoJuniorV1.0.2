module.exports = {
	name: 'message',
	execute(message) {
		console.log(`${message.author.tag} de #${message.channel.name} mensaje que se envio: ${message.content}`);
	},
};
