const Discord = require('discord.js')

module.exports = {
    name: 'bunker',
    args: false,
    execute (message, args, bot){
        let em = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setImage('https://media.discordapp.net/attachments/411514498101411840/727379036556361728/BunkerCodesJuly.jpg?width=1409&height=671')

        message.channel.send(em)

    }
}