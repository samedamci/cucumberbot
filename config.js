const LocalStorage = require('node-localstorage').LocalStorage;
// const mkdir = require('mkdirp'); 

bot.on('message', message => {
if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const { guild } = message;
    ls = new LocalStorage(`./scratch/${guild.id}`);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // const command = args.shift().toLowerCase();
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
    };
});

bot.on("guildCreate", guild => {
    ls = new LocalStorage(`./scratch/${guild.id}`);
    // ls.setItem('prefix.json', `{ "value": "!" }`); 
});

bot.on('message', async message => {
    if (message.content === `${prefix}guilds`) {
        const guildArray = bot.guilds.map((guild) => {
            return `${guild.name} : ${guild.id}`;
        });
        message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``);
    };
});