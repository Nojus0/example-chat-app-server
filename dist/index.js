"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.CONFIG = void 0;
var socket_io_1 = require("socket.io");
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var Config_1 = require("./Config");
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var http_2 = require("./http");
var dotenv_1 = require("dotenv");
dotenv_1.config();
if (process.env.SECRET == null)
    console.log("Secret Token for JWT not found in env");
else
    console.log("Secret Found: " + process.env.SECRET);
var PORT = process.env.PORT || 4000;
exports.CONFIG = new Config_1.Config(path_1.default.join(__dirname, "accounts.json"), []);
var app = express_1.default();
app.use(cors_1.default());
app.use("/api", http_2.ROUTER);
var server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server, { cors: { credentials: true, origin: "*" } });
server.listen(PORT, function () { return console.log("Server listening on port " + PORT); });
require("./io/Connection"); // Imports when io is set up, otherwise undefined
