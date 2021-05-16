import jwt from "jsonwebtoken"
import { Socket } from "socket.io";
import { IAccount, IMessage, ISendMessage, SECRET } from "../interfaces";
import { UseAllAuthed } from "./Authenticated";
import { ChatSocket } from "./Connection";

export default function (socket: ChatSocket, message: string) {

    try {
        UseAllAuthed(e => {
            let MESSAGE: IMessage = {
                IsSender: false,
                message: message,
                sender: socket.username
            }

            if (e.id === socket.id) MESSAGE.IsSender = true;

            e.emit("new:message", MESSAGE);
        })
    } catch (error) { return; }

}