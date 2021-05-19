"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAllAuth = exports.UseAllAuthed = exports.removeAuthenticated = exports.addAuthenticated = exports.setAuthenticated = exports.Authenticated = void 0;
exports.Authenticated = [];
function setAuthenticated(e) {
    exports.Authenticated = e;
}
exports.setAuthenticated = setAuthenticated;
function addAuthenticated(e) {
    console.log("[IO] " + e.username + " authenticated");
    exports.Authenticated = __spreadArray(__spreadArray([], exports.Authenticated), [e]);
}
exports.addAuthenticated = addAuthenticated;
function removeAuthenticated(e) {
    console.log("[IO] " + e.username + " removed");
    exports.Authenticated = exports.Authenticated.filter(function (auth) { return auth.id !== e.id; });
}
exports.removeAuthenticated = removeAuthenticated;
function UseAllAuthed(cb) {
    for (var _i = 0, Authenticated_1 = exports.Authenticated; _i < Authenticated_1.length; _i++) {
        var authed = Authenticated_1[_i];
        cb(authed);
    }
}
exports.UseAllAuthed = UseAllAuthed;
function SendAllAuth(m) {
    UseAllAuthed(function (socket) {
        socket.emit("new:message", m);
    });
}
exports.SendAllAuth = SendAllAuth;
