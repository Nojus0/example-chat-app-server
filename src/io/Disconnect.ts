import { IMessage } from "../interfaces";
import { removeAuthenticated, SendAllAuth } from "./Authenticated";
// import { Authenticated, setAuthenticated, UseAllAuthed } from "./Authenticated";
import { ChatSocket } from "./Connection";

export default function (socket: ChatSocket) {

    SendAllAuth({
        IsSender: false,
        message: `${socket.username} left.`,
        sender: "Server"
    })

    removeAuthenticated(socket);

}