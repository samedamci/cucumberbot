const t = new Date();
var hour = t.getHours();
var minute = t.getMinutes();
if (minute < 10) minute = `0${minute}`;
if (hour < 10) hour = `0${hour}`;
var time = `${hour}:${minute}`;

var day = t.getDate();
var month = t.getMonth();
var year = t.getFullYear();
if (day < 10) day = `0${day}`;
if (month < 10) month = `0${month}`;
var firsttime = `${time}`;
var firstdate = `${day}:${month}:${year}`;

bot.on("ready", () => {
  const statuses = [
    `commands 📓`,
    `${bot.guilds.size} servers 👫`,
    `${prefix}help 🚨`
  ]
  setInterval(function() {
    const rstatus = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(rstatus, {type: "Listening"});
  }, 5000);
  process.stdout.write("\x1Bc");
  console.log(`${bot.user.tag} signed!`);
});

dbl.on('posted', () => {
  console.log('Server count posted!');
});

bot.on('message', async message => {
  if (message.content === 'cc!dev>guilds') {
      const guildArray = bot.guilds.map((guild) => {
          return `${guild.name} : ${guild.id}`;
      });
      message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``);
  };
});
