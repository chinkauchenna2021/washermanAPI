"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regValidation = void 0;
var zod_1 = require("zod");
var ZRegistration = zod_1.z.object({
    email: zod_1.z.string().email({ message: "" })
});
exports.regValidation = (zod_1.z.infer);
