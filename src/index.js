require('dotenv').config();
const Discord = require('discord.js')
const Client = new Discord.Client();
const token = process.env.Client();

Client.login(token);

Client.once('ready', () => {
    console.log('ready')
})

