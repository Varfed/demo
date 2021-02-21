const Discord = require('discord.js');

module.exports = {
	name: 'changestat',
    args: true,
    guildOnly: true,
	execute(message, args, bot) {
        if(!message.member.roles.cache.has('733382837268381748')) return message.reply("No.");
        let usr = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        var stat1 = args[1]
        var stat2 = args[2]
        
        switch(stat1){
            case "rec":
                stat1 = 'Recruit'
                var role = message.guild.roles.cache.find(r => r.id === '544069737777463296');
                if(role) usr.roles.remove(role);
                break;

            case "mmb":
                stat1 = 'Member'
                var role = message.guild.roles.cache.find(r => r.id === '544610262590685194');
                if(role) usr.roles.remove(role);
                break;

            case "regM":
                stat1 = 'Registered Member'
                var role = message.guild.roles.cache.find(r => r.id === '538246982364299275');
                if(role) usr.roles.remove(role);
                break;
            
            case "ofc":
                stat1 = 'Clan Officer'
                var role = message.guild.roles.cache.find(r => r.id === '538247089642143754');
                if(role) usr.roles.remove(role);
                break;
            
            case "cl":
                if(!message.member.roles.cache.has('538246874608435200') || !message.member.roles.cache.has('615208103146946570')) return message.reply("No.");
                stat1 = 'Clan Leader'
                var role = message.guild.roles.cache.find(r => r.id === '556503919229140992');
                if(role) message.member.roles.remove(role);
                break

            case "rh":
                if(!message.member.roles.cache.has('538246874608435200')) return message.reply("No.");
                stat1 = 'Right Hand'
                var role = message.guild.roles.cache.find(r => r.id === '615208103146946570');
                if(role) usr.roles.remove(role);
                break;


        }

        switch (stat2){
            case "mmb":
                stat2 = 'Member'
                var role = message.guild.roles.cache.find(r => r.id === '544610262590685194');
                if(role) usr.roles.add(role);
                break;

            case "regM":
                stat2 = 'Registered Member'
                var role = message.guild.roles.cache.find(r => r.id === '538246982364299275');
                if(role) usr.roles.add(role);
                break;
            
            case "ofc":
                stat2 = 'Clan Officer'
                var role = message.guild.roles.cache.find(r => r.id === '538247089642143754');
                if(role) usr.roles.add(role);
                break;
            
            case "cl":
                if(!message.member.roles.cache.has('538246874608435200') || !message.member.roles.cache.has('615208103146946570')) return message.reply("No.");
                stat2 = 'Clan Leader'
                var role = message.guild.roles.cache.find(r => r.id === '556503919229140992');
                if(role) usr.roles.add(role);
                break

            case "rh":
                if(!message.member.roles.cache.has('538246874608435200')) return message.reply("No.");
                stat2 = 'Right Hand'
                var role = message.guild.roles.cache.find(r => r.id === '615208103146946570');
                if(role) usr.roles.add(role);
                break; 
                
            case "bot":
                stat2 = 'Bot'
                var role = message.guild.roles.cache.find(r => r.id === '538251307060822018');
                if(role) usr.roles.add(role);
                break;                  
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#1a7939')
        .setTitle('Изменение статуса')
        .addField(`Пользователь: `, `${usr.user.username}`)
        .addField(`Было: `, `${stat1}`)
        .addField(`Стало: `, `${stat2}`)
        
        message.channel.send(embed)
    },
};