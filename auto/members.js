bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL;
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setDescription(`
        :wave: Hello ${member}! 
        
        :smile: Welcome in our server!
        `)
        .setThumbnail(memberavatar)
        .setColor('GREEN')
        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL;
        let embed = new Discord.RichEmbed()
        .setDescription(`:tired_face: Oh, user ${member.user.tag} left our server...`)
        .setColor('RED')
        channel.sendEmbed(embed);
})
