const Discord = require('discord.js')
const client = new Discord.Client()
const path = require('path')
const fs = require('fs')

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')

client.on("ready", () => {
  console.log(`${client.user.username} Listo!`);
  client.user.setActivity(`c!help | ${client.users.cache.size} usuarios | ${client.guilds.cache.size} servers | Version 1.0.2`, { type: "PLAYING" });


  loadCommands(client)
})

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(config.token)
