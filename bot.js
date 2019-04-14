const t = new Date();
var hour = t.getHours();
var minute = t.getMinutes();
if (minute < 10) minute = "0" + minute;
if (hour < 10) hour = "0" + hour;
var time = hour + ":" + minute;

setInterval(() => {
  const t = new Date();
  hour = t.getHours();
  minute = t.getMinutes();
  if (minute < 10) minute = "0" + minute;
  if (hour < 10) hour = "0" + hour;
  time = hour + ":" + minute;
  bot.user.setGame(time);
  console.log(`\x1b[37m [${time}]: [global] \x1b[34m Time was refreshed.`);
}, 60 * 1000);

bot.on("ready", () => {
  process.stdout.write("\x1Bc");
  bot.user.setStatus("idle");
  bot.user.setGame(time);
  console.log(`\x1b[37m [${time}]: \x1b[33m ${bot.user.tag} signed!`);
  console.log(`\x1b[37m [${time}]: \x1b[36m Modules was loaded correct. \x1b[37m`);
  console.log("--------------------------------------");
});
