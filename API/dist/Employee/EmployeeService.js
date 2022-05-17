"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const Employee_1 = require("../Model/Employee");
class EmployeeService {
    constructor() {
        this.getEmployees = async () => {
            return await Employee_1.Employees.findAll();
        };
        this.createEmployee = async (employee) => {
            await Employee_1.employeeSchema.validateAsync(employee);
            // if (schemaCheckResult.error) {
            //     res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
            //     return
            // }
            return await Employee_1.Employees.create(employee);
        };
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map