const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require('./config/config.json');
const { token, prefix } = config;

bot.login(token);

const fs = require("fs");

eval(fs.readFileSync("./bot.js") + "");

eval(fs.readFileSync("./commands/help.js") + "");
eval(fs.readFileSync("./commands/mod.js") + "");

eval(fs.readFileSync("./auto/members.js") + "");
