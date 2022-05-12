"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeByID = exports.modifyEmployeeByID = exports.getEmployeeByID = exports.createEmployee = exports.DisplayEmployees = exports.hello = void 0;
const Employee_1 = require("../Model/Employee");
const main_1 = require("../main");
// const employees: Employee[] = []
function hello(req, res) {
    res.json({
        message: 'Hello World!'
    });
}
exports.hello = hello;
const DisplayEmployees = (req, res, next) => {
    (0, main_1.query)('select * from employees e order by e.id', [], (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err });
            return;
        }
        res.json({ Employees: result.rows });
    });
    // res.json({Employees: employees})
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
    // var newEmployee = new Employee(id, name, salary, department);
    // employees.push(newEmployee);
    const queryText = 'INSERT INTO employees(id,name,salary,department) VALUES($1,$2,$3,$4)';
    (0, main_1.query)(queryText, [id, name, salary, department], (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err });
            return;
        }
        res.status(200).json({ CreatedEmployee: result.rows[0] });
    });
    // res.status(200).json({CreatedEmployee: newEmployee})
};
exports.createEmployee = createEmployee;
const getEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    const queryText = 'select * from employees e where e.id = $1';
    // for (let i = 0; i < employees.length; i++) {
    //     var emp = employees[i]
    //     if (emp.ID == empID) {
    //         res.json({employee: emp})
    //         return
    //     }
    // }
    (0, main_1.query)(queryText, [empID], (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err });
            return;
        }
        if (result.rowCount == 1)
            res.json({ Employee: result.rows[0] });
        else
            res.status(400).send({ errorMessage: "No such employee with ID:" + String(empID) });
    });
    // res.status(400).send({errorMessage: "No such employee with ID:" + String(empID)})
};
exports.getEmployeeByID = getEmployeeByID;
const modifyEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    // for (let i = 0; i < employees.length; i++) {
    //     var emp = employees[i]
    //     if (emp.ID == empID) {
    //         let body = req.body
    //         body.id = empID
    //         const schemaCheckResult = employeeSchema.validate(body)
    //         if (schemaCheckResult.error) {
    //             res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
    //             return
    //         }
    //         let newEmployee = new Employee(empID, body.name, body.salary, body.department)
    //         employees[i] = newEmployee
    //         res.json({modifiedEmployee: newEmployee})
    //         return
    //     }
    // }
    // res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
    const queryText = 'update employees set name = $1, salary = $2, department = $3 where id = $4';
    let body = req.body;
    body.id = empID;
    const schemaCheckResult = Employee_1.employeeSchema.validate(body);
    if (schemaCheckResult.error) {
        res.status(400).json({ ErrorMessage: schemaCheckResult.error.details[0].message });
        return;
    }
    (0, main_1.query)(queryText, [body.name, body.salary, body.department, empID], (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err });
            return;
        }
        if (result.rowCount == 1)
            res.json({ Employee: body });
        else
            res.status(400).json({ errorMessage: "No such employee with ID:" + String(empID) });
    });
};
exports.modifyEmployeeByID = modifyEmployeeByID;
const deleteEmployeeByID = (req, res, next) => {
    var empID = req.params.id;
    // for (let i = 0; i < employees.length; i++) {
    //     var emp = employees[i]
    //     if (emp.ID == empID) {
    //         let deletedEmployee = employees[i]
    //         employees.splice(i, 1)
    //         res.json({deletedEmployee: deletedEmployee})
    //         return
    //     }
    // }
    // res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
    const queryText = 'delete from employees where id = $1';
    (0, main_1.query)(queryText, [empID], (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err });
            return;
        }
        if (result.rowCount == 1)
            res.json({ message: 'Deleted Successfully' });
        else
            res.status(400).json({ errorMessage: "No such employee with ID:" + String(empID) });
    });
};
exports.deleteEmployeeByID = deleteEmployeeByID;
//# sourceMappingURL=Controller.js.map