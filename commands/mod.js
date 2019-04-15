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
              let umbed = new Discord.RichEmbed()
              .setDescription(`:white_check_mark: Successfully kicked ${user.tag}.`);
              message.channel.send(umbed);
              console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${user.tag} was kicked.`);
            })
            .catch(() => {
              let ambed = new Discord.RichEmbed()
              .setDescription(`:x: I was unable to kick the member.`);
              message.channel.send(ambed);
              console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
            });
        } else {
          let ombed = new Discord.RichEmbed()
          .setDescription(`:x: That user isn't in this guild!`);
          message.channel.send(ombed);
          console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
        }
      } else {
        let zymbed = new Discord.RichEmbed()
        .setDescription(`:x: You didn't mention the user to kick!`);
        message.channel.send(zymbed);
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not kicked.`);
      }
    };
    if (message.content.startsWith(`${prefix}ban`)) {
        const user = message.mentions.users.first();
        console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[35m User ${message.author.tag.toString()} used \x1b[37m !ban \x1b[35m command.`);
        if (!message.member.roles.some(r=>["Administrator"].includes(r.name)) ) {
          let bymbed = new Discord.RichEmbed()
          .setDescription(`:x: Sorry, you don't have permissions to use this command!`);
          message.channel.send(bymbed);  
        };
        let member = message.mentions.members.first();
        if (!member) {
          let fymbed = new Discord.RichEmbed()
          .setDescription(`:x: Please mention a valid member of this server.`);
          message.channel.send(fymbed);
          console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not banned.`)
        }
        let rembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry... I couldn't ban this user.`);
        member.ban()
        .catch(error => message.channel.send(rembed));
        if (member.bannable) {
          let ymbed = new Discord.RichEmbed()
          .setDescription(`:white_check_mark: ${member.user.tag} has banned by ${message.author.tag}.`);
          message.channel.send(ymbed);
          console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m User ${member.user.tag} has banned.`);
        } else {
          console.log(`\x1b[37m [${time}]: [s: ${guild.name}] \x1b[31m [error]: User not banned.`);
        }
    };
});