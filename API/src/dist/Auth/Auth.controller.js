"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const Auth_service_1 = require("./Auth.service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = async (req, res, next) => {
    const service = new Auth_service_1.AuthService();
    service.register(req.body)
        .then((userWithToken) => {
        // save user token
        res.send({ createdUser: userWithToken });
    })
        .catch((err) => {
        res.status(400).send({ errorMessage: "Errors!" });
    });
};
exports.register = register;
const login = async (req, res, next) => {
    const service = new Auth_service_1.AuthService();
    service.login(req.body)
        .then((userWithToken) => {
        res.send({ createdUser: userWithToken });
    })
        .catch((err) => {
        res.status(400).send({ errorMessage: "Errors!" });
    });
};
exports.login = login;
//# sourceMappingURL=Auth.controller.js.map