const {Client} = require('discord.js')

const bot = new Client({
    disableEveryone: true
})

module.exports = {
    name: "ping",
    execute (message, args) {
       message.reply('Pong! Your ping is: '
       
       + ` \`${message.createdTimestamp - Date.now()}ms\``)
    }
}
 