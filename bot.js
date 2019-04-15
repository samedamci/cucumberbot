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

setInterval(() => {
  const t = new Date();
  hour = t.getHours();
  minute = t.getMinutes();
  if (minute < 10) minute = `0${minute}`;
  if (hour < 10) hour = `0${hour}`;
  time = `${hour}:${minute}`;
  console.log(`\x1b[37m [${time}]: [global] \x1b[34m Time was refreshed.`);
}, 60*1000);

bot.on("ready", () => {
  process.stdout.write("\x1Bc");
  bot.user.setStatus("idle");
  bot.user.setActivity("commands",{type: "Listening"});
  console.log(`\x1b[37m [${time}]: \x1b[33m ${bot.user.tag} signed!`);
  console.log(`\x1b[37m [${time}]: \x1b[36m Modules was loaded correct. \x1b[37m`);
  console.log("--------------------------------------");
});
