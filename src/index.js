require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const botCommands = require("./commands");

bot.login(process.env.TOKEN);

bot.once("ready", () => {
  console.log("ready");
});

Object.keys(botCommands).map((key) => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on("message", (msg) => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  console.info("called command:", command);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
    console.log("executed ping");
  } catch (error) {
    console.error("something went wrong... check the command import");
    msg.reply("ACHTUNG: das Command wurde nicht gefunden oder existiert nicht");
  }
});
