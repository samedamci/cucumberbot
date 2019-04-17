bot.on("message", message => {
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
    if (message.content.indexOf(prefix) !==0) return;
      var args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === "clear") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
          if (args < 1) {
            message.channel.fetchMessages()
              .then(function(){
                  let embed = new Discord.RichEmbed()
                  .setDescription(`:x: Incorrect arguments.`)
                  message.channel.send(embed);
              })
          } else {
            message.channel.fetchMessages()
              .then(function(){
                message.channel.bulkDelete(++args);
              })
            }                        
        } else {
          let embed = new Discord.RichEmbed()
          .setDescription(`:x: You don't have permission to do this.`)
          message.channel.send(embed);
        }
    };
});