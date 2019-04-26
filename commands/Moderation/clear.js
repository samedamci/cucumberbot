bot.on('message', message => {
    if (message.author.bot) return;
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