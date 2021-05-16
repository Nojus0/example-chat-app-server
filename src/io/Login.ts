import jwt from "jsonwebtoken"
import { IAccount, IMessage, SECRET } from "../interfaces";
import { addAuthenticated, SendAllAuth } from "./Authenticated";
import { ChatSocket } from "./Connection";

export default function (socket: ChatSocket, token: string) {

    if (token == null) return;

    try {
        const USER = jwt.verify(<string>token, SECRET) as IAccount;
        socket.username = USER.username;
        
        addAuthenticated(socket);

        SendAllAuth({
            IsSender: false,
            message: `${USER.username} has joined the chat.`,
            sender: "Server"
        })
    }
    catch (error) { return; }
}