import { Message, Client } from "discord.js";

export class Pong {
    message: Message;
    client: Client;

    constructor(message: Message, client: Client) {
        this.client = client;
        this.message = message;
    }

    pong() {
        this.message.channel.send(`ping: ${this.client.user?.locale}`,)
    }
}