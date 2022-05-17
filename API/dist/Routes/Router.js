"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Employee_controller_1 = require("../Employee/Employee.controller");
const router = (0, express_1.Router)();
router.get('/', Employee_controller_1.hello);
router.get('/employee', Employee_controller_1.getEmployees);
router.post('/employee', Employee_controller_1.createEmployee);
router.get('/employee/:id', Employee_controller_1.getEmployeeByID);
router.put('/employee/:id', Employee_controller_1.modifyEmployeeByID);
router.delete('/employee/:id', Employee_controller_1.deleteEmployeeByID);
exports.default = router;
//# sourceMappingURL=Router.js.map