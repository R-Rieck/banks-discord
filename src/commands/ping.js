module.exports = {
  name: "ping",
  description: "Ping to see if the bot is alive!",
  execute(msg, args) {
    msg.reply("pong");
  },
};
