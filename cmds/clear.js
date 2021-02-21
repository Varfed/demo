const Discord = require('discord.js')

module.exports ={
    name:'clear',
    args: true, 
    execute (message, args, bot) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        if(!args[0]) return message.channel.send("no");
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
        })
    } 
}
