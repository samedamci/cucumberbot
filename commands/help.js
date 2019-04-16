bot.on("message", message => {
  if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
      .addField(`!help`,`shows list of commands`)

      .addField(`!kick`,`kicks user from server`)
      .addField(`!ban`,`bans user from server`)

      .addField(`!serverinfo`,`informations of this server`)
      .addField(`!botinfo`,`informations of me`)
    message.channel.send(embed);
  }
});
