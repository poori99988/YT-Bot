const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');

client.on('ready', () => {
    console.log('Bot is up and running!');
    console.log(`Logged in as ${client.user.tag}`);
});
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.on('message', async message => {
     if(!message.content.startsWith(config.prefix)) return;
   const args = message.content.substring(config.prefix.length).split(" ");
   const command = args.shift().toLowerCase()
   switch(command){
       case "ping":
       client.commands.get('ping').execute(client, message, args);
       break;
       case "avatar":
       client.commands.get('avatar').execute(client, message, args);
        break;
        case "embed":
        client.commands.get('embed').execute(client, message, args);
        break;
        case "kick":
        client.commands.get('kick').execute(client, message, args);
        break;
        case "ban":
        client.commands.get('ban').execute(client, message, args);
        break;
        case "unban":
        client.commands.get('unban').execute(client, message, args);
        break;
        case "ticket":
        client.commands.get('ticket').execute(client, message, args);
        break;
        case "close":
        client.commands.get('close').execute(client, message, args);
        break;
        case "snipe":
        client.commands.get('snipe').execute(client, message, args);
        break;
        case "clear":
        client.commands.get('clear').execute(client, message, args);
        break;
        case "joke":
        client.commands.get('joke').execute(client, message, args);
        break;
   }
})
client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
})
client.login(config.token);
//Hello guys,Welcome back to my channel phoenix development
//Today i will show u guys how to make a joke command
//We will be using a package for this command called custom-discord-jokes
//This package is made by me using a public repo as base