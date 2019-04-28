bot.on("message", message => {
    const { guild } = message;
    if (message.author.bot) return;
    if (message.content === `${prefix}serverinfo`) {
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                let embedPL = new Discord.RichEmbed()
                .setAuthor(name=`${guild.name}`, icon=`${guild.iconURL}`)
                .addField(`>> Założyciel`, `${guild.owner.user.tag}`, true)
                .addField(`>> Ilość członków`, `${guild.memberCount}`, true)
                .addField(`>> Ilość kanałów`, `${guild.channels.size}`, true)
                .addField(`>> Ilość rang`, `${guild.roles.size}`, true)
                .addField(`>> Region`, `${guild.region}`, true)
                .addField(`>> ID`, `${guild.id}`, true)
                .addField(`>> Utworzony`, `${guild.createdAt}`, true)
                message.channel.send(embedPL);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
        } else {
            let embedEN = new Discord.RichEmbed()
            .setAuthor(name=`${guild.name}`, icon=`${guild.iconURL}`)
            .addField(`>> Owner`, `${guild.owner.user.tag}`, true)
            .addField(`>> Members`, `${guild.memberCount}`, true)
            .addField(`>> Channels`, `${guild.channels.size}`, true)
            .addField(`>> Roles`, `${guild.roles.size}`, true)
            .addField(`>> Region`, `${guild.region}`, true)
            .addField(`>> ID`, `${guild.id}`, true)
            .addField(`>> Created at`, `${guild.createdAt}`, true)
            message.channel.send(embedEN);
        };
    };
});