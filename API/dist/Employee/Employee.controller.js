"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeByID = exports.modifyEmployeeByID = exports.getEmployeeByID = exports.createEmployee = exports.getEmployees = exports.hello = void 0;
const Employee_service_1 = require("./Employee.service");
function hello(req, res) {
    res.send({
        message: 'Hello World!'
    });
}
exports.hello = hello;
const getEmployees = async (req, res, next) => {
    const service = new Employee_service_1.EmployeeService();
    res.send({ Employees: await service.getEmployees() });
};
exports.getEmployees = getEmployees;
const createEmployee = async (req, res, next) => {
    const service = new Employee_service_1.EmployeeService();
    service.createEmployee(req.body)
        .then((employee) => {
        res.send({ createdEmployee: employee });
    })
        .catch((err) => {
        res.status(400).send({ errorMessage: "Errors!" });
    });
};
exports.createEmployee = createEmployee;
const getEmployeeByID = async (req, res, next) => {
    const service = new Employee_service_1.EmployeeService();
    service.getEmployeeByID(req.params.id)
        .then((employees) => {
        res.send({ employeeFound: employees });
    })
        .catch((err) => {
        res.status(400).send({ errorMessage: "Errors!" });
    });
};
exports.getEmployeeByID = getEmployeeByID;
const modifyEmployeeByID = async (req, res, next) => {
    var empID = req.params.id;
    let employee = req.body;
    employee.id = empID;
    const service = new Employee_service_1.EmployeeService();
    service.modifyEmployeeByID(employee)
        .then((numbers) => {
        if (numbers[0] > 0)
            res.send({ message: 'Success' });
        else
            res.status(400).send({ message: 'Cannot find employees with ID:' + empID });
    })
        .catch((err) => {
        res.status(400).send({ message: "Errors!" });
    });
};
exports.modifyEmployeeByID = modifyEmployeeByID;
const deleteEmployeeByID = async (req, res, next) => {
    var empID = req.params.id;
    const service = new Employee_service_1.EmployeeService();
    service.deleteEmployeeByID(empID)
        .then((number) => {
        if (number == 1) {
            res.send({ message: 'Success' });
        }
        else {
            res.status(400).send({ message: 'Cannot find employees with ID:' + empID });
        }
    })
        .catch((err) => {
        res.status(400).send({ message: "Errors!" });
    });
};
exports.deleteEmployeeByID = deleteEmployeeByID;
//# sourceMappingURL=Employee.controller.js.map