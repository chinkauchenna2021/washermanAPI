"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationRoute = void 0;
var express_1 = __importDefault(require("express"));
var RegistrationController_1 = require("../controllers/RegistrationController");
var router = express_1.default.Router();
exports.RegistrationRoute = router;
router.get('/registeration', RegistrationController_1.registration);
