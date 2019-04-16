const commands = `
!help - shows list of commands

!kick - kicks user from server
!ban - bans user from server

!serverinfo - informations of your server
!botinfo - informations of Cucumber Bot
`;

bot.on("message", message => {
  const { guild } = message;
  if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
      .setTitle("Help")
      .setDescription(`${commands}`);
    message.channel.send(embed);
  }
});
