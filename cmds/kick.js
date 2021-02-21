const Discord = require('discord.js')
const { promptMessage } = require("../functions.js");

module.exports = {
    name: 'kick',
    args: true,
    async execute (message, args, bot){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No.");
        let usr = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        let reason = args[1]

        if(!message.member.me.hasPermission("KICK_MEMBERS")) return message.reply("No.")

        if(usr === message.author) {
            message.channel.send('Вы собрались кикнуть себя?')
        }

        usr.send('Вы были изгнаны из сервера!')
        const promptEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`Это сообщение станет не рабочим через 30 секунд.`)
        .setDescription(`Вы уверены что хотите изгнать ${usr}?`)

        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                usr.kick({
                    reason: reason
                })

                let eSucc = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Пользователь ${usr} был успешно изгнан! Причина: ${reason}`)

                message.channel.send(eSucc)

                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)
                    });

            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Отмена`)
                    .then(m => m.delete(10000));
            }
        });
    }
}