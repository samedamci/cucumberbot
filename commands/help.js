bot.on("message", message => {
  if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
    .setURL(`https://cucumberbot.netlify.com`)
    .setTitle(`View website`)
    .setAuthor(name=`Cucumber Bot`, icon="https://cdn.discordapp.com/avatars/565794682836090880/7e73680fc78223119c4d551d8a428525.png?size=2048")
    .setDescription(`This is command list for Cucumber Bot.`)
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
