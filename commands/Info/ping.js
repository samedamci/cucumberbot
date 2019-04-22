bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'ping')) {
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000);
        let color = 0x2ed32e;
        if (ping > 90 || botping > 200) color = 15322368;
        if (ping > 190 || botping > 300) color = 16725020;
        let embed = new Discord.RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setDescription(`
        Message ping: **${ping}** ms
        RAM: ${ramusage}/1858 MB (${Math.round(ramusage/1858*100)}%)
        `)
        .setColor(color)
        message.channel.send(embed);
    };
});