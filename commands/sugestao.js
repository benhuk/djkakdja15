exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("escreva sua sugestão")
        client.guilds.get("422407763834961932").channels.get("441069800001765396").send("----------------------Sugestão------------------------\n"+ sugest + "\n sugestão enviada por <@" + message.author.id + "> ou " + message.author.tag + "\n---------------------fim--------------------")
    message.channel.send("sua sugestão será avaliada pelos administradores!")
}