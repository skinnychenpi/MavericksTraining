"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeByID = exports.modifyEmployeeByID = exports.getEmployeeByID = exports.createEmployee = exports.getEmployees = exports.hello = void 0;
const Employee_1 = require("../Model/Employee");
const EmployeeService_1 = require("./EmployeeService");
function hello(req, res) {
    res.send({
        message: 'Hello World!'
    });
}
exports.hello = hello;
const getEmployees = async (req, res, next) => {
    const service = new EmployeeService_1.EmployeeService();
    res.json({ Employees: service.getEmployees() });
};
exports.getEmployees = getEmployees;
const createEmployee = async (req, res, next) => {
    const service = new EmployeeService_1.EmployeeService();
    service.createEmployee(req.body)
        .then((employee) => {
        res.status(200).json({ createdEmployee: employee });
    })
        .catch((err) => {
        res.status(400).json({ errorMessage: "Errors!" });
    });
};
exports.createEmployee = createEmployee;
const getEmployeeByID = async (req, res, next) => {
    var empID = req.params.id;
    Employee_1.Employees.findAll({
        where: {
            id: empID
        }
    }).then((results) => {
        res.status(200).json({ employee: results });
        // res.send()
    }).catch((err) => {
        res.status(400).json({ errorMessage: err });
    });
};
exports.getEmployeeByID = getEmployeeByID;
const modifyEmployeeByID = async (req, res, next) => {
    var empID = req.params.id;
    let body = req.body;
    body.id = empID;
    const schemaCheckResult = Employee_1.employeeSchema.validate(body);
    if (schemaCheckResult.error) {
        res.status(400).json({ ErrorMessage: schemaCheckResult.error.details[0].message });
        return;
    }
    Employee_1.Employees.update({ name: body.name, salary: body.salary, department: body.department }, { where: { id: empID }
    }).then((result) => {
        res.status(200).json({ employee: result });
    }).catch((err) => {
        res.status(400).json({ errorMessage: err });
    });
};
exports.modifyEmployeeByID = modifyEmployeeByID;
const deleteEmployeeByID = async (req, res, next) => {
    var empID = req.params.id;
    Employee_1.Employees.destroy({ where: {
            id: empID
        }
    }).then((result) => {
        res.status(200).json({ employee: result });
    }).catch((err) => {
        res.status(400).json({ errorMessage: err });
    });
};
exports.deleteEmployeeByID = deleteEmployeeByID;
//# sourceMappingURL=EmployeeController.js.map