bot.on("message", message => {
    if (message.author.bot) return;
    const { guild } = message;
    if (message.content.startsWith(prefix + 'ping')) {
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000);
        let color = 0x2ed32e;
        if (ping > 90) color = 15322368;
        if (ping > 190) color = 16725020;
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                let embedEN = new Discord.RichEmbed()
                .setTitle(`:ping_pong: Pong!`)
                .setDescription(`
                Opóźnienie wiadomości: **${ping}** ms
                Zużycie RAMu: ${ramusage}/1858 MB (${Math.round(ramusage/1858*100)}%)
                `)
                .setColor(color)
                message.channel.send(embedEN);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
        } else {
            let embedEN = new Discord.RichEmbed()
            .setTitle(`:ping_pong: Pong!`)
            .setDescription(`
            Message ping: **${ping}** ms
            RAM usage: ${ramusage}/1858 MB (${Math.round(ramusage/1858*100)}%)
            `)
            .setColor(color)
            message.channel.send(embedEN);};
    };
});