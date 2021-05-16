"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER = void 0;
var express_1 = require("express");
var interfaces_1 = require("./interfaces");
var utils_1 = require("./utils");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.ROUTER = express_1.Router();
exports.ROUTER.get("/login", function (req, res) {
    var _a = req.query, username = _a.username, password = _a.password;
    if (username == null || password == null)
        return res.json({ success: false });
    var REQ_ACC = {
        username: username,
        password: password
    };
    console.log(REQ_ACC);
    if (!utils_1.AccountValid(REQ_ACC))
        return res.json({ success: false });
    try {
        var TOKEN = jsonwebtoken_1.default.sign({ username: REQ_ACC.username }, interfaces_1.SECRET, {
            expiresIn: "30d"
        });
        return res.json({
            success: true,
            token: TOKEN
        });
    }
    catch (error) {
        return res.json({
            success: false
        });
    }
});
exports.ROUTER.get("/verify", function (req, res) {
    var auth = req.query.auth;
    if (auth == null)
        return res.json({ success: false });
    try {
        var USER = jsonwebtoken_1.default.verify(auth, interfaces_1.SECRET);
        console.log("[HTTP] Successefully verifed " + USER.username);
        return res.json({ success: true });
    }
    catch (error) {
        console.log("[HTTP] Failed to verify");
        return res.json({ success: false });
    }
});
