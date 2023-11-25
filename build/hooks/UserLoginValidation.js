"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersValidator = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function UsersValidator(req) {
    var tokenwithbearer = req.get('Authorization');
    var validation = jsonwebtoken_1.default.verify(tokenwithbearer === null || tokenwithbearer === void 0 ? void 0 : tokenwithbearer.split(' ')[0], String(process.env.JWT_SECRET));
    if (validation) {
        req.users = validation;
        return true;
    }
}
exports.UsersValidator = UsersValidator;
