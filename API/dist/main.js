"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./Routes/Router"));
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./DB/config"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/', Router_1.default);
app.use((err, req, res, next) => {
    res.status(500).send({ ErrorMessage: err.message });
});
config_1.default.sync().then(() => {
    console.log("Database is synced......");
}).catch((err) => {
    console.log("Database can't be synced, the error is: " + err);
});
app.listen(3000);
//# sourceMappingURL=main.js.map