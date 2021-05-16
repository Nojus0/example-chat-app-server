"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountValid = void 0;
var index_1 = require("./index");
function AccountValid(a) {
    for (var _i = 0, _a = index_1.CONFIG.get(); _i < _a.length; _i++) {
        var account = _a[_i];
        if (account.username === a.username && account.password === a.password)
            return true;
    }
    return false;
}
exports.AccountValid = AccountValid;
