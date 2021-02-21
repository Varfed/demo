const Discord = require('discord.js');

module.exports = {
	name: 'args',
    description: 'Information about the arguments provided.',
    args: true,
    guildOnly: true,
	execute(message, args, bot) {
        if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArgument length: ${args.length}`);
		
	},
};