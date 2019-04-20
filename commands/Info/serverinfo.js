bot.on("message", message => {
    const { guild } = message;
    if (message.author.bot) return;
    if (message.content === `${prefix}serverinfo`) {
        const embed = new Discord.RichEmbed()
        .setAuthor(name=`${guild.name}`, icon=`${guild.iconURL}`)
        .addField(`>> Owner`, `${guild.owner.user.tag}`, true)
        .addField(`>> Members`, `${guild.memberCount}`, true)
        .addField(`>> Channels`, `${guild.channels.size}`, true)
        .addField(`>> Roles`, `${guild.roles.size}`, true)
        .addField(`>> Region`, `${guild.region}`, true)
        .addField(`>> ID`, `${guild.id}`, true)
        .addField(`>> Created at`, `${guild.createdAt}`, true)
        message.channel.send(embed);
    };
});