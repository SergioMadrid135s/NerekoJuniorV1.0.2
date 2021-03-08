module.exports = {
	commands: 'kick2',
	description: 'Kick a un usuario.',
	guildOnly: true,
	callback(message) {

const user = message.mentions.users.first();
// If we have a user mentioned
if (user) {
  // Now we get the member from the user
  const member = message.guild.members.resolve(user);
  // If the member is in the guild
  if (member) {
    /**
     * Kick the member
     * Make sure you run this on a member, not a user!
     * There are big differences between a user and a member
     */
    member
      .kick('Razón opcional que se mostrará en los registros de auditoría.')
      .then(() => {
        // We let the message author know we were able to kick the person
        message.channel.send(`Kickeado con éxito ${user.tag}`);
      })
      .catch(err => {
        // An error happened
        // This is generally due to the bot not being able to kick the member,
        // either due to missing permissions or role hierarchy
        message.channel.send('No pude kickear al miembro,sube mi rol');
        // Log the error
        console.error(err);
      });
  } else {
    // The mentioned user isn't in this guild
    message.channel.send("¡Ese usuario no está en este server!");
  }
  // Otherwise, if no user was mentioned
} else {
  message.channel.send("¡No mencionaste al usuario para kickear!");
}
}
}