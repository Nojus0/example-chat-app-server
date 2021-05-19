import { ChatSocket } from "./io/Connection";

export const SECRET = process.env.SECRET;

export interface IAccount {
    username: string,
    password: string
}

export type IToken = string

export interface IMessage {
    sender: string
    message: string
    IsSender: boolean
}

export interface ISendMessage {
    token: string,
    message: string
}

export interface IAuthCallback {
    (sockets: ChatSocket)
}