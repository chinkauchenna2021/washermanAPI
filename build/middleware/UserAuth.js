"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
var UserLoginValidation_1 = require("../hooks/UserLoginValidation");
function UserAuth(req, res, next) {
    var isLogedIn = (0, UserLoginValidation_1.UsersValidator)(req);
    if (isLogedIn) {
        next();
    }
}
exports.UserAuth = UserAuth;
