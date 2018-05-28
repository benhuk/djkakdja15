var Discord = require('discord.js')

exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("você não mencioniou ninguém")
        var arquivo = new Discord.Attachment()
       .setAttachment("https://media1.tenor.com/images/5a40d02b078e86cccfb3d0c1b4e84f73/tenor.gif","kamehameha.gif");

 message.channel.send("você <@" + message.author.id + "> usou um kamehameha em <@"+ user.id +">",arquivo)

}