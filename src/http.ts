import { Router } from "express"
import { IAccount, IToken, SECRET } from "./interfaces";
import { AccountValid } from "./utils";
import jwt from "jsonwebtoken"

export const ROUTER = Router();

ROUTER.get("/login", (req, res) => {
    const { username, password } = req.query;

    if (username == null || password == null) return res.json({ success: false })

    const REQ_ACC: IAccount = {
        username: <string>username,
        password: <string>password
    }

    console.log(REQ_ACC)

    if (!AccountValid(REQ_ACC)) return res.json({ success: false });

    try {
        const TOKEN: IToken = jwt.sign({ username: REQ_ACC.username }, SECRET, {
            expiresIn: "30d"
        });

        return res.json({
            success: true,
            token: TOKEN
        })
    } catch (error) {
        return res.json({
            success: false
        })
    }

})


ROUTER.get("/verify", (req, res) => {
    const { auth } = req.query;

    if (auth == null) return res.json({ success: false });

    try {
        const USER = jwt.verify(<string>auth, SECRET) as IAccount;
        console.log(`[HTTP] Successefully verifed ${USER.username}`)
        return res.json({ success: true });
    } catch (error) {
        console.log(`[HTTP] Failed to verify`)
        return res.json({ success: false });
    }

})
