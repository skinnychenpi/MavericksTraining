"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
var express = require('express');
App_1.default.use(express.json());
const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser);
// app.use(bodyParser.urlencoded({ extended: false }));
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map