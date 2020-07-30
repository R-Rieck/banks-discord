"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pong = void 0;
var Pong = /** @class */ (function () {
    function Pong(message, client) {
        this.client = client;
        this.message = message;
    }
    Pong.prototype.pong = function () {
        var _a;
        this.message.channel.send("ping: " + ((_a = this.client.user) === null || _a === void 0 ? void 0 : _a.locale));
    };
    return Pong;
}());
exports.Pong = Pong;
//# sourceMappingURL=pong.js.map