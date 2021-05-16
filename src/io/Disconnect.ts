import { IMessage } from "../interfaces";
import { removeAuthenticated, SendAllAuth } from "./Authenticated";
import { ChatSocket } from "./Connection";

export default function (socket: ChatSocket) {
    if (socket.username == null) return;

    SendAllAuth({
        IsSender: false,
        message: `${socket.username} left.`,
        sender: "Server"
    })

    removeAuthenticated(socket);

}