import { IAuthCallback, IMessage } from "../interfaces";
import { ChatSocket } from "./Connection";

export let Authenticated: ChatSocket[] = [];

export function setAuthenticated(e: ChatSocket[]) {
    Authenticated = e;
}

export function addAuthenticated(e: ChatSocket) {
    console.log(`[IO] ${e.username} authenticated`)
    Authenticated = [...Authenticated, e];
}

export function removeAuthenticated(e: ChatSocket) {
    console.log(`[IO] ${e.username} removed`)
    Authenticated = Authenticated.filter(auth => auth.id !== e.id);
}

export function UseAllAuthed(cb: IAuthCallback) {
    for (const authed of Authenticated) cb(authed);
}

export function SendAllAuth(m: IMessage) {
    UseAllAuthed(socket => {
        socket.emit("new:message", m);
    })
}
