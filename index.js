// встречайте, на сцене... ХУЙ

const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEveryone: true
});
const fs = require('fs')
const config = require('./settings.json');
let pref = config.prefix;
let token = config.token;
bot.cmds = new Discord.Collection()


const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	bot.cmds.set(command.name, command);
}



bot.on('ready', () => {
    console.log('client online')
    
    bot.user.setStatus("idle");
    bot.user.setActivity('No punk theme, only hentai~', {
        type:"LISTENING"
    })
})

bot.on("guildMemberAdd", async member => {
    const chId = '538248946229837834'
    const rId = '544069737777463296'

    const channelL = member.guild.channels.cache.get(chId)

    channelL.send(`**${member}, Добро пожаловать на сервер! Перейди в <#> что-бы подать заявку!**`)
    member.roles.add(rId);
  });

bot.on('guildMemberRemove', async member => {
    const chId = '732198809458966568'

    const channelL = member.guild.channels.cache.get(chId)

    channelL.send(`**${member.user.username}, покинул сервер**`)


})




bot.on('message', async message => {
    if(message.author.bot) return;

	const args = message.content.slice(pref.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.cmds.get(commandName)
        || bot.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
    if (!command) return;
   
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Я не могу это выполнить в ЛС');
    }

    if (command.args && !args.length) {
        let reply = `Вы не указали аргументы, ${message.author}!`;
        
        if (command.usage) {
			reply += `\nПравильное использование команды: \`${pref}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
     }
     


    try {
        command.execute(message, args, bot)
    } catch (error) {
        console.error(error);
        message.reply('Произошла ошибка во время исполнения команды!');
    }

})




bot.login(token)