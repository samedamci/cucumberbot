const directoryPath = path.join(__dirname, 'commands');
fs.readdir(directoryPath, function (err, files) {
    if (err) return console.log('Unable to scan directory: ' + err);
    const filesarr = [];
    files.forEach(file => {
        const filename = file.slice(0,file.length -3);
        filesarr.push(filename);
    });
    bot.on('message', message => {
      if (message.author.bot) return;
      if (message.content === `${prefix}help2`) {
        const embed = new Discord.RichEmbed()
        .setDescription(filesarr.join(`,`));
        message.channel.send(embed);
      }
    });
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
    .setURL(`https://cucumberbot.netlify.com`)
    .setTitle(`View website`)
    .setAuthor(name=`Cucumber Bot`, icon="https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048")
    .setDescription(`If you like me you can [donate](https://donatebot.io/checkout/566934496231030795) me, because I would be on better hosting
    with more RAM and I would have more functions! Please, think that.`)
      .addField(`Info commands:`,
      `
      **${prefix}help**
      Shows this window
      **${prefix}ping**
      Returns ping and RAM usage
      **${prefix}botinfo**
      Informations of me
      **${prefix}serverinfo**
      Informations of current server
      `)
      .addField(`Mods commands:`,
      `
      **${prefix}kick <@member>**
      Kicks user from server
      **${prefix}ban <@member>**
      Bans user on server
      **${prefix}clear <n>**
      Deletes n last messages
      `
      )
    message.channel.send(embed);
  }
});
