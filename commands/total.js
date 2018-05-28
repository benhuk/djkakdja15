exports.run = (client,message,args)=> {
message.channel.sendMessage(`Estou no total em: \n**Canais**${client.channels.size} \n**Servidores:**${client.guilds.size} \n**Usuarios:**${client.users.size}`);
}