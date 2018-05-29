const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não!");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Use: +mute <tempo> <@user>");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Esse user não pode ser mutado!");
    let muterole = message.guild.roles.find(`name`, "Mutado");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Use: +mute <tempo> <@user>");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> foi mutado por: ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> Foi desmutado!`);
    }, ms(mutetime));

}
