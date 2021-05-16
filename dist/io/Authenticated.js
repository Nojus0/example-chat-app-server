"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    exports.Authenticated = __spreadArrays(exports.Authenticated, [e]);
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
