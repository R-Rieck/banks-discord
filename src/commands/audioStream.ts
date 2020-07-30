// import * as ytdl from 'ytdl'

import { Message, VoiceChannel } from "discord.js";
import ytdl, { validateURL } from 'ytdl-core';

export class AudioStreams {
    voiceChannel: VoiceChannel | null | undefined = null;
    message: Message;

    constructor(message: Message) {
        this.message = message
    }

    StreamYoutube(url: string) {
        this.voiceChannel = this.message.member?.voice.channel;

        if (this.voiceChannel)
            this.voiceChannel
                .join()
                .then(connection => {
                    console.log('joined server!');

                    const stream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
                    const dispatcher = connection.play(stream);

                    dispatcher.on('finish', () => this.voiceChannel?.leave())
                    dispatcher.on('error', (error) => {
                        console.log('dispatcher Error: ', error)
                        this.voiceChannel?.leave();
                    })
                })
                .catch(error => console.log('voiceChannel Error: ', error));

    }

    leaveChannel() {
        this.voiceChannel?.leave();
    }
}