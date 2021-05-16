"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authenticated_1 = require("./Authenticated");
function default_1(socket) {
    if (socket.username == null)
        return;
    Authenticated_1.SendAllAuth({
        IsSender: false,
        message: socket.username + " left.",
        sender: "Server"
    });
    Authenticated_1.removeAuthenticated(socket);
}
exports.default = default_1;
