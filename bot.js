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
  process.stdout.write("\x1Bc");
  bot.user.setStatus("idle");
  bot.user.setActivity("commands",{type: "Listening"});
  console.log(`${bot.user.tag} signed!`);
});
