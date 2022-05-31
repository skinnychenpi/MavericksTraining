"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Auth_model_1 = require("./Auth.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.register = async (user) => {
            await Auth_model_1.userSchema.validateAsync(user);
            const hashedPwd = await bcrypt_1.default.hash(user.password, 10);
            user.password = hashedPwd;
            await Auth_model_1.User.create(Object.assign({}, user));
            const token = jsonwebtoken_1.default.sign({ userName: user.userName, email: user.email }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            });
            let userWithToken = { userName: user.userName, email: user.email, token: token };
            return userWithToken;
        };
        this.login = async (user) => {
            await Auth_model_1.userSchema.fork(['userName'], (schema) => schema.optional()).validateAsync(user);
            let userFound = await Auth_model_1.User.findOne({ where: { email: user.email } });
            if (await bcrypt_1.default.compare(user.password, userFound.password)) {
                const token = jsonwebtoken_1.default.sign({ userName: userFound.userName, emailFound: user.email }, process.env.TOKEN_KEY, {
                    expiresIn: "2h",
                });
                return { token: token };
            }
            else {
                throw Error("Password Not Correct!");
            }
        };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=Auth.service.js.map