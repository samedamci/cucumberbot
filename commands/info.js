bot.on("message", message => {
    const { guild } = message;
    if (message.content === `${prefix}serverinfo`) {
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
        **Online on:** ${bot.guilds.size} servers
        `)
        .setFooter(`Joined at: ${guild.joinedAt}`)
        message.channel.send(botinfoEmbed)
    };
    if (message.content.startsWith(prefix + 'ping')) {
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000)
        let color = 0x2ed32e;
        if (ping > 90) color = 15322368; 
        if (ping > 190) color = 16725020; 
        let embed = new Discord.RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setDescription(`
        Ping: **${ping}** ms
        RAM: ${ramusage} mb
        `)
        .setColor(color)
        message.channel.send(embed);
    };
});