"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZUserBooking = exports.ZUsersLogin = exports.ZRegistration = void 0;
var zod_1 = require("zod");
exports.ZRegistration = zod_1.z.object({
    email: zod_1.z.string().email({ message: " not a valid email " }),
    password: zod_1.z.string().min(6, { message: "password must not be less than 5" }),
    fistname: zod_1.z.string(),
    lastname: zod_1.z.string(),
    address: zod_1.z.string().min(10, { message: "address length too short" }),
    pics: zod_1.z.string(),
    balance: zod_1.z.number().optional()
});
exports.ZUsersLogin = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5, { message: "Password too short" })
});
exports.ZUserBooking = zod_1.z.object({
    id: zod_1.z.string().min(10, { message: 'password not correct' })
});
