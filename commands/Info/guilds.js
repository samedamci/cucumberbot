bot.on('message', message => {
    const { guild } = message;
    if (message.content === `${prefix}guilds`) {
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                const guildArray = bot.guilds.map((guild) => {
                    return '`' + guild.name + '`';
                });
                let embedPL = new Discord.RichEmbed()
                .setTitle(':family_mwg: Serwery')
                .setDescription(`${guildArray.join(', ')}`)
                message.channel.send(embedPL);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
        } else {
            const guildArray = bot.guilds.map((guild) => {
                return '`' + guild.name + '`';
            });
            let embedEN = new Discord.RichEmbed()
            .setTitle(':family_mwg: Guilds')
            .setDescription(`${guildArray.join(', ')}`)
            message.channel.send(embedEN);
        };
    };
});