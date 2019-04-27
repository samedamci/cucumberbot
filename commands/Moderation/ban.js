bot.on("message", message => {
    if (message.author.bot) return;
    const { guild } = message;
    if (message.content.startsWith(`${prefix}ban`)) {
        const user = message.mentions.users.first();
        if (!message.member.roles.some(r=>["Administrator"].includes(r.name)) ) {
          if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
              let embedPL = new Discord.RichEmbed()
              .setDescription(`:x: Nie masz uprawnień do używania tej komendy!`);
              message.channel.send(embedPL);
            } else {
              message.channel.send('You set incorrect language, please clear your settings!');
            };
          } else {
            let embedEN = new Discord.RichEmbed()
            .setDescription(`:x: Sorry, you don't have permissions to use this command!`);
            message.channel.send(embedEN);
          };  
        };
        let member = message.mentions.members.first();
        if (!member) {
          if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
              let embedPL = new Discord.RichEmbed()
              .setDescription(`:x: Wybierz prawidłowego członka serwera.`);
              message.channel.send(embedPL);
            } else {
              message.channel.send('You set incorrect language, please clear your settings!');
            };
          } else {
            let embedEN = new Discord.RichEmbed()
            .setDescription(`:x: Please mention a valid member of this server.`);
            message.channel.send(embedEN);
          };
        };
        if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
          const language = require(`./scratch/${guild.id}/language.json`);
          const { "value": lang }  = language;
          if (lang === 'PL') {
            let embedPL = new Discord.RichEmbed()
            .setDescription(`:x: Nie mogę zbanować tego użytkownika.`);
            member.ban()
            .catch(error => message.channel.send(embedPL));
          } else {
            message.channel.send('You set incorrect language, please clear your settings!');
          };
        } else {
          let embedEN = new Discord.RichEmbed()
          .setDescription(`:x: Sorry... I couldn't ban this user.`);
          member.ban()
          .catch(error => message.channel.send(embedEN));
        };
        if (member.bannable) {
          if (fs.existsSync(`./scratch/${guild.id}/language.json`)) {
            const language = require(`./scratch/${guild.id}/language.json`);
            const { "value": lang }  = language;
            if (lang === 'PL') {
              let embedPL = new Discord.RichEmbed()
              .setDescription(`:white_check_mark: ${member.user.tag} został zbanowany przez ${message.author.tag}.`);
              message.channel.send(embedPL);
            } else {
              message.channel.send('You set incorrect language, please clear your settings!');
            };
          } else {
            let embedEN = new Discord.RichEmbed()
            .setDescription(`:white_check_mark: ${member.user.tag} has banned by ${message.author.tag}.`);
            message.channel.send(embedEN);
          };
        } 
    };
});