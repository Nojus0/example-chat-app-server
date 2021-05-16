"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var interfaces_1 = require("../interfaces");
var Authenticated_1 = require("./Authenticated");
function default_1(socket, token) {
    if (token == null)
        return;
    try {
        var USER = jsonwebtoken_1.default.verify(token, interfaces_1.SECRET);
        socket.username = USER.username;
        Authenticated_1.addAuthenticated(socket);
        Authenticated_1.SendAllAuth({
            IsSender: false,
            message: USER.username + " has joined the chat.",
            sender: "Server"
        });
    }
    catch (error) {
        return;
    }
}
exports.default = default_1;
