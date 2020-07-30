"use strict";
// import * as ytdl from 'ytdl'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioStreams = void 0;
var ytdl_core_1 = __importStar(require("ytdl-core"));
var AudioStreams = /** @class */ (function () {
    function AudioStreams(message) {
        this.message = message;
    }
    AudioStreams.prototype.StreamYoutube = function (url) {
        var _a;
        var streamOptions = { seek: 0, volume: 1 };
        var voiceChannel = (_a = this.message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
        if (voiceChannel)
            voiceChannel.join().then(function (connection) {
                console.log('joined server!');
                console.log(ytdl_core_1.validateURL(url));
                var stream = ytdl_core_1.default(url, { filter: 'audioonly' });
                console.log(stream);
                var dispatcher = connection.play(stream);
                dispatcher.on('error', function (error) {
                    console.log('dispatcher for playing Error: ', error);
                    voiceChannel.leave();
                });
                dispatcher.on('finish', function () {
                    voiceChannel.leave();
                });
            }).catch(function (error) { return console.log('voiceChannel Error: ', error); });
    };
    return AudioStreams;
}());
exports.AudioStreams = AudioStreams;
//# sourceMappingURL=audioStream.js.map