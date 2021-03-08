module.exports = {
	name: 'message',
	execute(message) {
		console.log(`${message.author.tag} de #${message.channel.name} enviado: ${message.content}`);
	},
};