const Discord = require('discord.js')
const { prefix } = require('../settings.json')

module.exports = {
    name: 'help',
    args: false,
    execute(msg, args, bot) {
      let emb = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle('Команды бота')
      .addField("!ban <user> <reason>", "Бан пользователя")
      .addField("!kick <user> <reason>", "Изгнать пользователя")
      .addField("!changestat <user> <from stat> <to stat>", "Изменение статуса: что бы узнать сокращения, напишите `!help stat`")
      .addField("!clear <amount>", "Очистить сообщения")
      .addField("!bunker", "Узнать код от бункера")
      .addField('!unban <user ID>', "Разбанить пользователя")
    
      let statEm = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle('Сокращения')
      .addField('rec', "Рекрут")
      .addField('mmb', "Member")
      .addField("regM", "Registered Member")
      .addField("ofc", "Officers")
      .addField("cl", "Clan Leader")
      .addField("rh", "Правая рука")

      if(args[0] === null || args == ''){
          msg.channel.send(emb)
      } else if( args[0] == "stat"){
          msg.channel.send(statEm)
      }
    }
}