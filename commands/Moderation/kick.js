bot.on("message", message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    const { guild } = message;
    if (message.content.startsWith(`${prefix}kick`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick("User was kicked.")
            .then(() => {
              let umbed = new Discord.RichEmbed()
              .setDescription(`:white_check_mark: Successfully kicked ${user.tag}.`);
              message.channel.send(umbed);
            })
            .catch(() => {
              let ambed = new Discord.RichEmbed()
              .setDescription(`:x: I was unable to kick the member.`);
              message.channel.send(ambed);
            });
        } else {
          let ombed = new Discord.RichEmbed()
          .setDescription(`:x: That user isn't in this guild!`);
          message.channel.send(ombed);
        }
      } else {
        let zymbed = new Discord.RichEmbed()
        .setDescription(`:x: You didn't mention the user to kick!`);
        message.channel.send(zymbed);
      }
    };
});