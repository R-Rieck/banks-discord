"use strict";
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv = __importStar(require("dotenv"));
var pong_1 = require("./commands/pong");
var audioStream_1 = require("./commands/audioStream");
var client = new discord_js_1.Client();
client.on("message", function (message) {
    var _a;
    var pong = new pong_1.Pong(message, client);
    var audioStream = new audioStream_1.AudioStreams(message);
    var content = message.content.split(' ');
    var command = content[0];
    var parameters = content.filter(function (element) {
        if (content[0] == element)
            return;
        return element;
    });
    if (message.author.id != ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id)) {
        switch (command) {
            case '!ping':
                pong.pong();
                break;
            case '!streamYt':
                audioStream.StreamYoutube(parameters[0]);
                break;
            default:
                break;
        }
    }
});
client.on('ready', function () {
    console.log('ready');
});
var token = (_a = dotenv.config().parsed) === null || _a === void 0 ? void 0 : _a.TOKEN;
client.login(token);
//# sourceMappingURL=index.js.map