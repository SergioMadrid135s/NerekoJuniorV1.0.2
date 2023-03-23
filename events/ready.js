
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot listo! Registrado como: ${client.user.tag}`);
	},
};
