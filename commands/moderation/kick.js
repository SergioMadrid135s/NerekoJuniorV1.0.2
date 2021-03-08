module.exports = {
	commands: 'kick',
	description: 'Kick a un usuario.',
	guildOnly: true,
	callback(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
