"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeByID = exports.modifyEmployeeByID = exports.getEmployeeByID = exports.createEmployee = exports.DisplayEmployees = exports.hello = void 0;
const Employee_1 = require("../Model/Employee");
function hello(req, res) {
    res.json({
        message: 'Hello World!'
    });
}
exports.hello = hello;
const DisplayEmployees = async (req, res, next) => {
    const allEmployees = await Employee_1.Employees.findAll();
    res.json({ Employees: allEmployees });
};
exports.DisplayEmployees = DisplayEmployees;
const createEmployee = async (req, res, next) => {
    const schemaCheckResult = Employee_1.employeeSchema.validate(req.body);
    if (schemaCheckResult.error) {
        res.status(400).json({ ErrorMessage: schemaCheckResult.error.details[0].message });
        return;
    }
    Employee_1.Employees.create(req.body)
        .then((employees) => {
        res.status(200).json({ employeesCreated: req.body });
        console.log(employees);
    })
        .catch((err) => {
        res.status(400).json({ errorMessage: err });
    });
    // res.status(200).json({employeesCreated: req.body})
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
//# sourceMappingURL=Controller.js.map