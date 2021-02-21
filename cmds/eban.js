const Discord = require('discord.js')
const {stripIndents} = require("common-tags")
const { promptMessage } = require("../functions.js");

module.exports = {
    name: 'eban',
    args: true,
    usage: "<user> <reason>",
    async execute (message, args, bot){
        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Please provide a person to ban.")
                .then(m => m.delete(5000));
        }

        // No reason
        let reason = args.slice(1).join(" ")
        if(reason=='' || reason==null){
            reason = "Не указано"
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ You do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I do not have permissions to ban members. Please contact a staff member")
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("Couldn't find that member, try again")
                .then(m => m.delete(5000));
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You can't ban yourself...")
                .then(m => m.delete(5000));
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("I can't ban that person due to role hierarchy, I suppose.")
                .then(m => m.delete(5000));
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- baned member:** ${toBan} (${toBan.id})
            **- baned by:** ${message.member} (${message.member.id})
            **- Reason:** ${reason}`);


            toBan.ban(reason).then(() =>{
                message.channel.send('Successful')
            })
            
    }
}