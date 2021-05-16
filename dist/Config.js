"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var fs_1 = __importDefault(require("fs"));
var Config = /** @class */ (function () {
    function Config(Path, initialData, encoding) {
        if (encoding === void 0) { encoding = "utf8"; }
        this.path = Path;
        this.encoding = encoding;
        if (!fs_1.default.existsSync(this.path))
            fs_1.default.writeFileSync(this.path, JSON.stringify(initialData, null, 2), this.encoding);
    }
    Config.prototype.get = function () {
        return JSON.parse(fs_1.default.readFileSync(this.path, this.encoding));
    };
    Config.prototype.ArrayAdd = function (ArrayToCombine) {
        if (!Array.isArray(ArrayToCombine))
            return false;
        var CURRENT = this.get();
        if (CURRENT == null)
            return false;
        CURRENT = __spreadArrays(CURRENT, ArrayToCombine);
        this.set(CURRENT);
        return true;
    };
    Config.prototype.ArrayRemove = function (ItemsToRemove) {
        if (!Array.isArray(ItemsToRemove))
            return false;
        var CURRENT = this.get();
        if (CURRENT == null)
            return false;
        try {
            var _loop_1 = function (r_item) {
                CURRENT = CURRENT.filter(function (item) { return item != r_item; });
            };
            for (var _i = 0, ItemsToRemove_1 = ItemsToRemove; _i < ItemsToRemove_1.length; _i++) {
                var r_item = ItemsToRemove_1[_i];
                _loop_1(r_item);
            }
        }
        catch (err) {
            console.log("\n            [CONFIG] Error removing items from array config file " + this.path + " error: " + err.message + "\n            ");
            return false;
        }
        this.set(CURRENT);
        return true;
    };
    Config.prototype.set = function (obj) {
        try {
            fs_1.default.writeFileSync(this.path, JSON.stringify(obj, null, 2), this.encoding);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    return Config;
}());
exports.Config = Config;
