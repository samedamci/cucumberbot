bot.on("message", message => {
    const { guild } = message;
    if (message.author.bot) return;
    if (message.content === `${prefix}botinfo`) {
        let ping = Date.now() - message.createdTimestamp;
        let ramusage = Math.floor(process.memoryUsage().rss / 1000000);
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                let embedPL = new Discord.RichEmbed()
                .setAuthor(name=`Cucumber Bot`, icon="https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048")
                .addField(`>> Opóźnienie`, `${ping}`, true)
                .addField(`>> Zużycie RAMu`, `${ramusage}/1858 MB (${Math.round(ramusage/1858*100)}%)`, true)
                .addField(`>> Zahostowany na`, `Huawei P8 Lite`, true)
                .addField(`>> System operacyjny`, `Linux [Android 6.0]`, true)
                .addField(`>> Jądro systemu`, `aarch64 Linux 3.10.86`, true)
                .addField(`>> Procesor`, `AArch64 Processor rev 3`, true)
                .addField(`>> Grafika`, `AArch64 Processor rev 3`, true)
                .addField(`>> Online od`, `${firstdate} - ${firsttime}`, true)
                .addField(`>> Język`, `javascript`, true)
                .addField(`>> Środowisko`, `node.js [${nodeversion}]`, true)
                .addField(`>> Biblioteka`, `discord.js [${libversion}]`, true)
                .addField(`>> API`, `dblapi.js [${apiversion}]`, true)
                .addField(`>> Wersja`, `${botversion}`, true)
                .addField(`>> Ilość serwerów`, `${bot.guilds.size}`, true)
                .addField(`>> Głosy`, `NaN`, true)
                .addField(`>> Komendy`, `7`, true)
                .addField(`>> Prefix`, `${prefix}`, true)
                .addField(`>> Autor`, `samedamci#5384`, true)
                .addField(`>> Na serwerze od`, `${guild.joinedAt}`)
                .addField(`>> Linki`, `:desktop: [strona](https://cucumberbot.netlify.com) | :keyboard: [support](https://discord.gg/7X6cvWF) | :robot: [discordbots](https://discordbots.org/bot/565794682836090880) | :cat: [github](https://github.com/samedamci/cucumberbot) | :notepad_spiral: [TODO](https://github.com/users/samedamci/projects/2) | :moneybag: [donate](https://donatebot.io/checkout/566934496231030795)`)
                message.channel.send(embedPL);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
        } else {
            let embedEN = new Discord.RichEmbed()
            .setAuthor(name=`Cucumber Bot`, icon="https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048")
            .addField(`>> Ping`, `${ping}`, true)
            .addField(`>> RAM usage`, `${ramusage}/1858 MB (${Math.round(ramusage/1858*100)}%)`, true)
            .addField(`>> Hosted on`, `Huawei P8 Lite`, true)
            .addField(`>> OS`, `Linux [Android 6.0]`, true)
            .addField(`>> Kernel`, `aarch64 Linux 3.10.86`, true)
            .addField(`>> CPU`, `AArch64 Processor rev 3`, true)
            .addField(`>> GPU`, `AArch64 Processor rev 3`, true)
            .addField(`>> Online from`, `${firstdate} - ${firsttime}`, true)
            .addField(`>> Language`, `javascript`, true)
            .addField(`>> Environment`, `node.js [${nodeversion}]`, true)
            .addField(`>> Library`, `discord.js [${libversion}]`, true)
            .addField(`>> API`, `dblapi.js [${apiversion}]`, true)
            .addField(`>> Version`, `${botversion}`, true)
            .addField(`>> Total servers`, `${bot.guilds.size}`, true)
            .addField(`>> Votes`, `NaN`, true)
            .addField(`>> Commands`, `7`, true)
            .addField(`>> Prefix`, `${prefix}`, true)
            .addField(`>> Author`, `samedamci#5384`, true)
            .addField(`>> On this server from`, `${guild.joinedAt}`)
            .addField(`>> Links`, `:desktop: [webpage](https://cucumberbot.netlify.com) | :keyboard: [service](https://discord.gg/7X6cvWF) | :robot: [discordbots](https://discordbots.org/bot/565794682836090880) | :cat: [github](https://github.com/samedamci/cucumberbot) | :notepad_spiral: [TODO](https://github.com/users/samedamci/projects/2) | :moneybag: [donate](https://donatebot.io/checkout/566934496231030795)`)
            message.channel.send(embedEN);
        };
    };
});