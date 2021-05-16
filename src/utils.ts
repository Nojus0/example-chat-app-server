import { CONFIG } from "./index";
import { IAccount } from "./interfaces";

export function AccountValid(a: IAccount) {
    for (const account of CONFIG.get())
        if (account.username === a.username && account.password === a.password) return true;

    return false;
}
