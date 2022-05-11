"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("./Routes/Router");
const body_parser_1 = require("body-parser");
var express = require('express');
const app = express();
app.use((0, body_parser_1.json)());
app.use('/', Router_1.default);
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=main.js.map