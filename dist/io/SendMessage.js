"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authenticated_1 = require("./Authenticated");
function default_1(socket, message) {
    try {
        Authenticated_1.UseAllAuthed(function (e) {
            var MESSAGE = {
                IsSender: false,
                message: message,
                sender: socket.username
            };
            if (e.id === socket.id)
                MESSAGE.IsSender = true;
            e.emit("new:message", MESSAGE);
        });
    }
    catch (error) {
        return;
    }
}
exports.default = default_1;
