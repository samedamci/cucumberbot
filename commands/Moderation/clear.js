bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !==0) return;
      var args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const { guild } = message;
      if (command === "clear") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
          if (args < 1) {
            message.channel.fetchMessages()
              .then(function(){
                if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
                  const language = require(`./scratch/${guild.id}/language.json`);
                  const { "value": lang }  = language;
                  if (lang === 'PL') {
                      let embedPL = new Discord.RichEmbed()
                      .setDescription(':x: Niepoprawne argumenty.')
                      message.channel.send(embedPL);
                  } else {
                      message.channel.send('You set incorrect language, please clear your settings!');
                  };
                } else {
                  let embedEN = new Discord.RichEmbed()
                  .setDescription(`:x: Incorrect arguments.`)
                  message.channel.send(embedEN);
                };
              });
          } else {
            message.channel.fetchMessages()
              .then(function(){
                message.channel.bulkDelete(++args);
              });
          };                        
        } else {
          if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
                let embedPL = new Discord.RichEmbed()
                .setDescription(':x: Nie masz odpowiednich uprawnień do używania tej komendy.')
                message.channel.send(embedPL);
            } else {
                message.channel.send('You set incorrect language, please clear your settings!');
            };
          } else {
            let embedEN = new Discord.RichEmbed()
            .setDescription(`:x: You don't have permission to do this.`)
            message.channel.send(embedEN);
          };
        }
    };
});