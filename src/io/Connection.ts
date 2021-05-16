import { io } from "../index";
import LoginPacket from "./Login";
import SendMessage from "./SendMessage";
import DisconnectPacket from "./Disconnect"
import { Socket } from "socket.io";

export interface ChatSocket extends Socket {
    username?: string,
}

io.on('connection', (socket: ChatSocket) => {
    socket.on("login", (token: string) => LoginPacket(socket, token));

    socket.on("send:message", (message: string) => SendMessage(socket, message));

    socket.on("disconnect", () => DisconnectPacket(socket));
})