const Discord = require('discord.js')

module.exports ={
    name:'generation',
    args: true,

    execute (message, args, bot) {
        let id = args[0]

        message.reply(`https://discord.com/oauth2/authorize?client_id=${id}&scope=bot`)
    } 
}
