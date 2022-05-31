"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const Employee_model_1 = require("./Employee.model");
class EmployeeService {
    constructor() {
        this.getEmployees = async () => {
            return await Employee_model_1.Employees.findAll({
                order: [['id', 'ASC']]
            });
        };
        this.createEmployee = async (employee) => {
            await Employee_model_1.employeeSchema.validateAsync(employee);
            return await Employee_model_1.Employees.create(employee);
        };
        this.modifyEmployeeByID = async (employee) => {
            await Employee_model_1.employeeSchema.validateAsync(employee);
            return await Employee_model_1.Employees.update({ name: employee.name, salary: employee.salary, department: employee.department }, { where: { id: employee.id } });
        };
        this.getEmployeeByID = async (empID) => {
            return await Employee_model_1.Employees.findAll({
                where: {
                    id: empID
                }
            });
        };
        this.deleteEmployeeByID = async (empID) => {
            return await Employee_model_1.Employees.destroy({
                where: {
                    id: empID
                }
            });
        };
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Employee.service.js.map