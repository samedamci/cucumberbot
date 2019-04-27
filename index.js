// modules
require('dotenv/config')
const fs = require("fs");
const path = require('path');

// libraries
const Discord = require("discord.js");
const DBL = require("dblapi.js");

// tokens
const bottoken = process.env.TOKEN;
const apitoken = process.env.APITOKEN;

// loaders
const bot = new Discord.Client();
const dbl = new DBL(apitoken, bot);
bot.login(bottoken);

eval(fs.readFileSync("./bot.js") + "");
eval(fs.readFileSync("./config.js") + "");
eval(fs.readFileSync("./commands/Info/help.js") + "");
eval(fs.readFileSync("./commands/Info/ping.js") + "");
eval(fs.readFileSync("./commands/Info/botinfo.js") + "");
eval(fs.readFileSync("./commands/Info/serverinfo.js") + "");
eval(fs.readFileSync("./commands/Moderation/ban.js") + "");
eval(fs.readFileSync("./commands/Moderation/kick.js") + "");
eval(fs.readFileSync("./commands/Moderation/clear.js") + "");
eval(fs.readFileSync("./auto/members.js") + "");

const globalconfig = require('./scratch/global.json');
const packageLock = require('./package-lock.json');
const package = require('./package.json');

const { prefix } = globalconfig;
const { dependencies, "version": botversion } = package;
const { "discord.js": libversion, "dblapi.js": apiversion, "node": nodeversion } = dependencies;

// errorlogs
bot.on('error', err => {
    console.log(err)
});
