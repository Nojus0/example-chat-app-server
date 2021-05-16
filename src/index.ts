import { Server } from "socket.io"
import http from "http";
import express from "express";
import { Config } from "./Config";
import { IAccount } from "./interfaces"
import path from "path";
import cors from "cors"
import { ROUTER } from "./http";
const PORT = process.env.PORT || 4000;

export const CONFIG = new Config<IAccount[]>(path.join(__dirname, "accounts.json"), []);
const app = express();
app.use(cors());
app.use("/api", ROUTER);

const server = http.createServer(app);
export const io = new Server(server, { cors: { credentials: true, origin: "*" } });
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

import "./io/Connection";
