
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Listo! Registrado como: ${client.user.tag}`);
	},
};