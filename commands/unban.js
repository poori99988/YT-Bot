const Discord = require('discord.js');
module.exports = {
    name : 'unban',
    execute(client, message, args){
        if (!message.member.permissions.has("BAN_MEMBERS"))
        return message.reply("you do not have permission to use this command...");
    
    const user = client.users.cache.get(args[0]);
    if (!user) return message.reply("you must provide a valid User ID...");
    
     message.guild.members.unban(user.id).then(()=>{
 message.channel.send(`**${user.tag}** has been unbanned from the server!`);
    }).catch(()=>{
    message.channel.send(`Unknow Ban`)
})
}
}