const LocalStorage = require('node-localstorage').LocalStorage;
const mkdir = require('mkdirp'); 

bot.on('message', message => {
if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const { guild } = message;
    ls = new LocalStorage(`./scratch/${guild.id}`);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content === `${prefix}config`) {
        mkdir(`./scratch/${guild.id}`);
        let embed = new Discord.RichEmbed()
        .setTitle('Config')
        .setDescription('not a content...')
        message.channel.send(embed);
    };
    if (message.content === `${prefix}config-lang PL`) {
        ls.setItem('language.json', '{ "value": "PL" }');
    };
    if (command === 'config-prefix') {
        message.channel.send('You choose: ' + args[0]);
        ls.setItem('prefix.json', `{ "value": "${args[0]}" }`);
    };
});

bot.on("guildCreate", guild => {
    ls = new LocalStorage(`./scratch/${guild.id}`);
    console.log("Joined a new guild: " + guild.name);
    ls.setItem('prefix.json', `{ "value": "!" }`);
});

bot.on('message', async message => {
    if (message.content === 'cc!dev>guilds') {
        const guildArray = bot.guilds.map((guild) => {
            return `${guild.name} : ${guild.id}`;
        });
        message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``);
    };
});