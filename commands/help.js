const commands = `
!help - shows list of commands

!kick - kicks user from server
!ban - bans user from server

!serverinfo
`;

bot.on("message", message => {
  const { guild } = message;
  if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
      .setTitle("Help")
      .setDescription(`${commands}`);
    message.channel.send(embed);
    console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !help \x1b[35m command.`);
  }
});
