bot.on("message", message => {
    const { guild } = message;
    if (message.content === `${prefix}serverinfo`) {
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !serverinfo \x1b[35m command.`);
        const serverinfoEmbed = new Discord.RichEmbed()
        .setTitle(`${guild.name}`)
        .setDescription(`
        **ID:** ${guild.id}
        **Region:** ${guild.region}
        **Members:** ${guild.memberCount}
        **Owner:** ${guild.owner}
        `)
        .setFooter(`Created at: ${guild.createdAt}`)
        message.channel.send(serverinfoEmbed);
    };
    if (message.content === `${prefix}botinfo`) {
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !botinfo \x1b[35m command.`);
        const botinfoEmbed = new Discord.RichEmbed()
        .setTitle(`Cucumber Bot`)
        .setDescription(`
        **Language:** JavaScript (Node.JS)
        **Library:** discord.js
        **Versions:**
        bot: ${botversion}
        library: ${discordJS.version}
        node: 11.0.0
        **Online from:** ${firstdate} - ${firsttime}
        `)
        .setFooter(`Joined at: ${guild.joinedAt}`)
        message.channel.send(botinfoEmbed)
    };
});