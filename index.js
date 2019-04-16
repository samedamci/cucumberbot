const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require('./config/config.json');
const packageLock = require('./package-lock.json');
const package = require('./package.json');
const { /*token,*/ prefix } = config;
const { dependencies } = packageLock;
const { "discord.js": discordJS } = dependencies;
const { version } = discordJS;
const { "version": botversion } = package;

require('dotenv/config')
const http = require('http');
const port = process.env.PORT || 3000;

http.createServer().listen(port);

const token = process.env.TOKEN; 
bot.login(token);

const fs = require("fs");

eval(fs.readFileSync("./bot.js") + "");

eval(fs.readFileSync("./commands/help.js") + "");
eval(fs.readFileSync("./commands/mod.js") + "");
eval(fs.readFileSync("./commands/info.js") + "");
eval(fs.readFileSync("./auto/members.js") + "");

bot.on('error', err => {
    console.log(err)
}) 