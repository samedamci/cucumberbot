const LocalStorage = require('node-localstorage').LocalStorage;

bot.on('message', message => {
if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const { guild } = message;
    ls = new LocalStorage(`./scratch/${guild.id}`);
    if (message.content === `${prefix}config`) {
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                let embedPL = new Discord.RichEmbed()
                .setTitle('Konfiguracja')
                .setDescription('brak zawartości...')
                message.channel.send(embedPL);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
        } else {
            let embedEN = new Discord.RichEmbed()
            .setTitle('Config')
            .setDescription('not a content...')
            message.channel.send(embedEN);
        };
    };
    if (message.content === `${prefix}config-lang PL`) {
        ls.setItem('language.json', '{ "value": "PL" }');
        let embedPL = new Discord.RichEmbed()
        .setDescription(`:white_check_mark: Pomyślnie zmieniono język na polski.`)
        message.channel.send(embedPL);
    };
    if (message.content === `${prefix}config-lang EN`) {
        let embedEN = new Discord.RichEmbed()
        .setDescription(`:white_check_mark: You choose English language.`)
        message.channel.send(embedEN);
        ls.setItem('language.json', '{ "value": "EN" }');
    };
});