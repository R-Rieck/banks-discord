import { Client, Message } from 'discord.js'
import * as dotenv from 'dotenv'
import { Pong } from './commands/pong';
import { AudioStreams } from './commands/audioStream';

const client = new Client();

client.on("message", (message: Message) => {
  const pong = new Pong(message, client)
  const audioStream = new AudioStreams(message)

  const content = message.content.split(' ');

  const command = content[0]
  const parameters = content.filter(element => {
    if (content[0] == element)
      return;

    return element;
  })

  if (message.author.id != client.user?.id) {
    switch (command) {
      case '!ping':
        pong.pong()
        break;

      case '!streamYt':
        audioStream.StreamYoutube(parameters[0])
        break;

      default:
        break;
    }
  }
})

client.on('ready', () => {
  console.log('ready')
})

const token = dotenv.config().parsed?.TOKEN;

client.login(token);

