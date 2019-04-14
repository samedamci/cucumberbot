bot.on("message", message => {
    if (!message.guild) return;
    const { guild } = message;
    if (message.content.startsWith(`${prefix}kick`)) {
      console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !kick \x1b[35m command.`);
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick("User was kicked.")
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
              console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${user.tag} was kicked.`);
            })
            .catch(() => {
              message.reply("I was unable to kick the member");
              console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
            });
        } else {
          message.reply("That user isn't in this guild!");
          console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
        }
      } else {
        message.reply("You didn't mention the user to kick!");
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
      }
    };
    if (message.content.startsWith(`${prefix}ban`)) {
        const user = message.mentions.users.first();
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !ban \x1b[35m command.`);
        if (!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
            message.reply("Sorry, you don't have permissions to use this command!");
        
        let member = message.mentions.members.first();
        if (!member) {
            message.reply("Please mention a valid member of this server.");
            console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not banned.`)
        }
        member.ban()
        .catch(error => message.reply(`Sorry... I couldn't ban this user.`));
        if (member.bannable) {
            message.reply(`${member.user.tag} has banned by ${message.author.tag}.`);
            console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m User ${member.user.tag} has banned.`);
        } else {
            console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not banned.`);
        }
    };
});