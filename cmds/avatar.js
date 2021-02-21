const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: "Send avatar!",
    execute(message, args, bot) {
        let av = message.author.displayAvatarURL()

        let em = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Your avatar:')
        .setImage(av);
    
        message.channel.send(em)
    }
}