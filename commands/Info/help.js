const helpEmbed = new Discord.RichEmbed()
const dirInfo = path.join(__dirname, 'commands/Info');
fs.readdir(dirInfo, (err, files) => {
    const filesarr = [];
    files.forEach(file => {
        const filename = file.slice(0,file.length -3);
        filesarr.push('`'+`${prefix+filename}`+'`');
    });
    helpEmbed.addField('Info commands', filesarr.join(', '));
});
const dirModeration = path.join(__dirname, 'commands/Moderation');
fs.readdir(dirModeration, (err, files) => {
    const filesarr = [];
    files.forEach(file => {
        const filename = file.slice(0,file.length -3);
        filesarr.push('`'+`${prefix+filename}`+'`');
    });
    helpEmbed.addField('Moderation commands', filesarr.join(', '));
});
bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content === `${prefix}help`) {
    helpEmbed.setAuthor(name='Cucumber Bot', icon='https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048')
    .setTitle('View website')
    .setURL('https://cucumberbot.netlify.com')
    .setDescription(`If you like me you can [donate](https://donatebot.io/checkout/566934496231030795) me, because I would be on better hosting
    with more RAM and I would have more functions! Please, think that.`)
    .setFooter('More commands in future...')
    message.channel.send(helpEmbed);
  }
});
