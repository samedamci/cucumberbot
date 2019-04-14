bot.on("guildMemberAdd", member => {
    const channel = member.guild.channels.find(ch => ch.name === "member-log");
    if (!channel) return;
    channel.send(`Hello ${member}, welcome on our server!`);
});