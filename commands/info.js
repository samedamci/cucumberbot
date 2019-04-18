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
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000);
        const embed = new Discord.RichEmbed()
        .setAuthor(name=`Cucumber Bot`, icon="https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048")
        .addField(`>> Ping`, `${ping}`, true)
        .addField(`>> Ram usage`, `${ramusage}`, true)
        .addField(`>> Hosted on`, `Heroku`, true)
        .addField(`>> Online from`, `${firstdate} - ${firsttime}`, true)
        .addField(`>> Language`, `javascript`, true)
        .addField(`>> Environment`, `node.js [11.0.0]`, true)
        .addField(`>> Library`, `discord.js [11.4.2]`, true)
        .addField(`>> OS`, `Linux`, true)
        .addField(`>> Total servers`, `${bot.guilds.size}`, true)
        .addField(`>> Commands`, `7`, true)
        .addField(`>> Prefix`, `${prefix}`, true)
        .addField(`>> Author`, `samedamci#5384`, true)
        .addField(`>> On this server from`, `${guild.joinedAt}`)
        .addField(`>> Links`, `:desktop: [webpage](https://cucumber.netlify.com)   -   :keyboard: [service](https://discord.gg/7X6cvWF)   -   :robot: [discordbots](https://discordbots.org/bot/565794682836090880)`)
        message.channel.send(embed)
    };
    if (message.content.startsWith(prefix + 'ping')) {
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000);
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