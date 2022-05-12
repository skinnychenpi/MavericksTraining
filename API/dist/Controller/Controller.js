"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeByID = exports.modifyEmployeeByID = exports.getEmployeeByID = exports.createEmployee = exports.DisplayEmployees = exports.hello = void 0;
const Employee_1 = require("../Model/Employee");
const employees = [];
function hello(req, res) {
    res.json({
        message: 'Hello World!'
    });
}
exports.hello = hello;
const DisplayEmployees = (req, res, next) => {
    res.json({ Employees: employees });
};
exports.DisplayEmployees = DisplayEmployees;
const createEmployee = (req, res, next) => {
    const schemaCheckResult = Employee_1.employeeSchema.validate(req.body);
    if (schemaCheckResult.error) {
        res.status(400).json({ ErrorMessage: schemaCheckResult.error.details[0].message });
        return;
    }
    var name = req.body.name;
    var id = req.body.id;
    var salary = req.body.salary;
    var department = req.body.department;
    var newEmployee = new Employee_1.Employee(id, name, salary, department);
    employees.push(newEmployee);
    res.status(200).json({ CreatedEmployee: newEmployee });
};
exports.createEmployee = createEmployee;
const getEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i];
        if (emp.ID == empID) {
            res.json({ employee: emp });
            return;
        }
    }
    res.status(400).send({ errorMessage: "No such employee with ID:" + String(empID) });
};
exports.getEmployeeByID = getEmployeeByID;
const modifyEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i];
        if (emp.ID == empID) {
            let body = req.body;
            body.id = empID;
            const schemaCheckResult = Employee_1.employeeSchema.validate(body);
            if (schemaCheckResult.error) {
                res.status(400).json({ ErrorMessage: schemaCheckResult.error.details[0].message });
                return;
            }
            let newEmployee = new Employee_1.Employee(empID, body.name, body.salary, body.department);
            employees[i] = newEmployee;
            res.json({ modifiedEmployee: newEmployee });
            return;
        }
    }
    res.status(400).json({ errorMessage: "No such employee with ID:" + String(empID) });
};
exports.modifyEmployeeByID = modifyEmployeeByID;
const deleteEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i];
        if (emp.ID == empID) {
            let deletedEmployee = employees[i];
            employees.splice(i, 1);
            res.json({ deletedEmployee: deletedEmployee });
            return;
        }
    }
    res.status(400).json({ errorMessage: "No such employee with ID:" + String(empID) });
};
exports.deleteEmployeeByID = deleteEmployeeByID;
//# sourceMappingURL=Controller.js.map