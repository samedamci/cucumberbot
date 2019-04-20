bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(`${prefix}ban`)) {
        const user = message.mentions.users.first();
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
        }
        let rembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry... I couldn't ban this user.`);
        member.ban()
        .catch(error => message.channel.send(rembed));
        if (member.bannable) {
          let ymbed = new Discord.RichEmbed()
          .setDescription(`:white_check_mark: ${member.user.tag} has banned by ${message.author.tag}.`);
          message.channel.send(ymbed);
        } 
    };
});