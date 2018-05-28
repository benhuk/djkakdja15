var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#6A5ACD")
 .setDescription("sla")
 .setTitle("teste")
 .setURL("https://discordapp.com/channels/406209503684722689/411602529680490496")
 .setTimestamp()
 .setImage(client.user.avatarURL)
 .setFooter("testando")
 .setThumbnail(message.author.avatarURL)
 .addField("titulo","conteudo")


 message.channel.send(embed)
}