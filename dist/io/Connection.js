"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Login_1 = __importDefault(require("./Login"));
var SendMessage_1 = __importDefault(require("./SendMessage"));
var Disconnect_1 = __importDefault(require("./Disconnect"));
index_1.io.on('connection', function (socket) {
    socket.on("login", function (token) { return Login_1.default(socket, token); });
    socket.on("send:message", function (message) { return SendMessage_1.default(socket, message); });
    socket.on("disconnect", function () { return Disconnect_1.default(socket); });
});
