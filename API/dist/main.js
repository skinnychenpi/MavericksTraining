"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./Routes/Router"));
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/', Router_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ ErrorMessage: err.message });
});
app.listen(3000);
//# sourceMappingURL=main.js.map