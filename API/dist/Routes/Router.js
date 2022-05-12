"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("../Controller/Controller");
const router = (0, express_1.Router)();
router.get('/', Controller_1.hello);
router.get('/employee', Controller_1.DisplayEmployees);
router.post('/employee', Controller_1.createEmployee);
router.get('/employee/:id', Controller_1.getEmployeeByID);
router.put('/employee/:id', Controller_1.modifyEmployeeByID);
router.delete('/employee/:id', Controller_1.deleteEmployeeByID);
exports.default = router;
//# sourceMappingURL=Router.js.map