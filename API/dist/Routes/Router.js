"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller_1 = require("../Controller/Controller");
const router = express.Router();
router.get('/', Controller_1.hello);
router.post('/employee', Controller_1.createEmployee);
exports.default = router;
//# sourceMappingURL=Router.js.map