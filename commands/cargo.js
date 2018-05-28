var Discord = require('discord.js')

exports.run = (client,message,args)=>{
 const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
   let sicon = "https://images-ext-1.discordapp.net/external/_broLvuZrY1lYVa52phtlVskgCQAG2ul59roabOVkU8/https/cdn.discordapp.com/icons/422407763834961932/45cfa04e2dbff3f0de31d668794dae7c.jpg?width=80&height=80"
  const embed = new Discord.RichEmbed() 



          .setThumbnail(sicon)
    .setAuthor(`Escolha seu Cargo!`, sicon)
    .addField("- Jogadores  =  :video_game:","**- Aprendiz / Iniciante = :question:**" )
  //  .addField("- Aprendiz / Iniciante = :question:")
    .addField("- VFX / Edição  = :yellow_heart:","**- GFX / Banners, Logos, Headers  = :green_heart:**")
    .setColor('#7289DA')
    .addField("- 3D Motion Designer / Intros  = :blue_heart:","**- Desenhista / Cartoon  = :purple_heart:**")
  message.channel.send(embed).then(msg => { 
   
    msg.react('🎮').then( r => { 
      msg.react('❓')
      msg.react('💛')
      msg.react('💚')
      msg.react('💙')
      msg.react('💜')
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id; 
      const forwards1Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id; 
      const forwards3Filter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id; 
      const forwards2Filter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id; 
            const forwards4Filter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id; 
      
      
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const ram = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
            const ram1 = msg.createReactionCollector(forwards1Filter, { time: 60000 }); 
                  const ram2 = msg.createReactionCollector(forwards2Filter, { time: 60000 });
       const ram3 = msg.createReactionCollector(forwards3Filter, { time: 60000 });
             const ram4 = msg.createReactionCollector(forwards3Filter, { time: 60000 });
     
      
      backwards.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","🎮Jogadores");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })

      ram.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","❓Aprendiz / Iniciante");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })
      ram1.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","💛VFX / Edição");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })   
            ram2.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","🧡GFX / Banners, Logos, Headers");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })   
                  ram3.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","💙3D Motion Designer / Intros");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })   
                        ram4.on('collect', r => { 
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
if (!member) return message.reply("Mencione um membro!");
let muteRole = message.guild.roles.find("name","💜Desenhista / Cartoon");
if (!muteRole) return message.reply ("Algo aconteceu, mencione um administrador!")
member.addRole(muteRole.id)
      })   
    })
 
  })
    
    }

