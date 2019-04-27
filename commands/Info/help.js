const helpEmbedEN = new Discord.RichEmbed()
const helpEmbedPL = new Discord.RichEmbed()
const dirInfo = path.join(__dirname, 'commands/Info');
fs.readdir(dirInfo, (err, files) => {
    const filesarr = [];
    files.forEach(file => {
        const filename = file.slice(0,file.length -3);
        filesarr.push('`'+`${prefix+filename}`+'`');
    });
    helpEmbedEN.addField('Info commands', filesarr.join(', '));
    helpEmbedPL.addField('Komendy informacyjne', filesarr.join(', '));
});
const dirModeration = path.join(__dirname, 'commands/Moderation');
fs.readdir(dirModeration, (err, files) => {
    const filesarr = [];
    files.forEach(file => {
        const filename = file.slice(0,file.length -3);
        filesarr.push('`'+`${prefix+filename}`+'`');
    });
    helpEmbedEN.addField('Moderation commands', filesarr.join(', '));
    helpEmbedPL.addField('Komendy moderacyjne', filesarr.join(', '));
});
bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content === `${prefix}help`) {
    const { guild } = message;
    if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
      const language = require(`./scratch/${guild.id}/language.json`);
      const { "value": lang }  = language;
      if (lang === 'PL') {
        helpEmbedPL.setAuthor(name='Cucumber Bot', icon='https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048')
        .setTitle('Odwiedź stronę internetową')
        .setURL('https://cucumberbot.netlify.com')
        .setDescription(`Jeśli mnie lubisz możesz [podarować](https://donatebot.io/checkout/566934496231030795) mi kilka złotych. 
        Moje utrzymanie nie jest darmowe i każdy grosz się liczy.`)
        .setFooter('Więcej komend wkrótce...')
        message.channel.send(helpEmbedPL);  
      } else {
          message.channel.send('You set incorrect language, please clear your settings!');
      };
    } else {
      helpEmbedEN.setAuthor(name='Cucumber Bot', icon='https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048')
      .setTitle('View website')
      .setURL('https://cucumberbot.netlify.com')
      .setDescription(`If you like me you can [donate](https://donatebot.io/checkout/566934496231030795) me, because I would be on better hosting
      with more RAM and I would have more functions! Please, think that.`)
      .setFooter('More commands in future...')
      message.channel.send(helpEmbedEN);
  };
  }
});
