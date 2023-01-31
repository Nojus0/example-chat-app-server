import {Server} from "socket.io"
import http from "http";
import express from "express";
import {Config} from "./Config";
import {IAccount} from "./interfaces"
import path from "path";
import cors from "cors"
import {ROUTER} from "./http";
import {config} from "dotenv"
import {ChatSocket} from "./io/Connection";
import SendMessage from "./io/SendMessage";
import LoginPacket from "./io/Login"
import DisconnectPacket from "./io/Disconnect"

config();
if (process.env.SECRET == null) console.log(`Secret Token for JWT not found in env`);
else console.log(`Secret Found: ${process.env.SECRET}`);

const PORT = process.env.PORT || 8080;

export const CONFIG = new Config<IAccount[]>(path.join(__dirname, "accounts.json"), []);
const app = express();
app.use(cors());
app.use("/chat-app-service/api", ROUTER);

const server = http.createServer(app);
export const io = new Server(server, {cors: {credentials: true, origin: "*"}, path: "/chat-app-service/api/socket.io"});

io.on('connection', (socket: ChatSocket) => {
    socket.on("login", (token: string) => LoginPacket(socket, token));

    socket.on("send:message", (message: string) => SendMessage(socket, message));

    socket.on("disconnect", () => DisconnectPacket(socket));
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));