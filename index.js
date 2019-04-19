// modules
require('dotenv/config')
const fs = require("fs");

// libraries
const Discord = require("discord.js");
const DBL = require("dblapi.js");

// server
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

// tokens
const bottoken = process.env.TOKEN;
const apitoken = process.env.APITOKEN;

// loaders
const bot = new Discord.Client();
const dbl = new DBL(apitoken, bot);
bot.login(bottoken);

eval(fs.readFileSync("./bot.js") + "");
eval(fs.readFileSync("./commands/help.js") + "");
eval(fs.readFileSync("./commands/mod.js") + "");
eval(fs.readFileSync("./commands/info.js") + "");
eval(fs.readFileSync("./commands/support.js") + "");
eval(fs.readFileSync("./auto/members.js") + "");

const config = require('./config.json');
const packageLock = require('./package-lock.json');
const package = require('./package.json');

const { prefix } = config;
const { dependencies, "version": botversion } = package;
const { "discord.js": libversion, "dblapi.js": apiversion, "node": nodeversion } = dependencies;

// errorlogs
bot.on('error', err => {
    console.log(err)
}) 