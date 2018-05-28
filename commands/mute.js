  var Discord = require('discord.js')
 var ms = require("ms")
exports.run = (client,message,args)=>{
 
let member= message.mentions.members.first();
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","Mutado");
if (!muteRole) return message.reply ("crie um cargo de mute!")
let params = message.content.split(" ").slice(1);
let time = params[1];
if (!time) return message.reply("Determine o temp de mute");

member.addRole(muteRole.id)
 message.channel.send(`membro foi mutado com sucesso!, ${member.user.tag}`);
            };
  module.exports.help = {
  name: "mute"
}