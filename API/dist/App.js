"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Employee_1 = require("./Model/Employee");
const Controller_1 = require("./Controller/Controller");
class App {
    constructor() {
        this.bodyParser = require('body-parser').json();
        this.express = express();
        this.employees = [];
        this.controller = new Controller_1.Controller();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', this.controller.hello);
        //   router.post('/employee', this.bodyParser, (req, res) => {
        //     var name = req.body.name;
        //     var id = req.body.id;
        //     var salary = req.body.salary;
        //     try {
        //         var department : Dept = req.body.department;
        //     } catch (err) {
        //         res.status(400).send({error: "Bad input of department."})
        //     }
        //     var newEmployee = new Employee(id, name, salary, department);
        //     this.employees.push(newEmployee);
        //     res.json(this.jsonifyEmployee(newEmployee))
        //   })
        router.post('/employee', this.bodyParser, this.controller.showAllEmployee);
        router.get('/employee', (req, res) => {
            let employees = this.employees;
            let jsonArr = [];
            for (let i = 0; i < employees.length; i++) {
                var emp = employees[i];
                jsonArr.push(this.jsonifyEmployee(emp));
            }
            res.json(jsonArr);
        });
        router.get('/employee/:id', (req, res) => {
            let empID = req.params.id;
            for (let i = 0; i < this.employees.length; i++) {
                var emp = this.employees[i];
                if (emp.ID == empID) {
                    res.json(this.jsonifyEmployee(emp));
                    return;
                }
            }
            res.status(400).send({ errorMessage: "No such employee with ID:" + String(empID) });
        });
        router.put('/employee/:id', this.bodyParser, (req, res) => {
            let empID = req.params.id;
            for (let i = 0; i < this.employees.length; i++) {
                var emp = this.employees[i];
                if (emp.ID == empID) {
                    let newEmployee = new Employee_1.Employee(empID, req.body.name, req.body.salary, req.body.department);
                    // Replace with the new one
                    this.employees[i] = newEmployee;
                    res.json(this.jsonifyEmployee(newEmployee));
                    return;
                }
            }
            res.status(400).send({ errorMessage: "No such employee with ID:" + String(empID) });
        });
        router.delete('/employee/:id', (req, res) => {
            let empID = req.params.id;
            for (let i = 0; i < this.employees.length; i++) {
                var emp = this.employees[i];
                if (emp.ID == empID) {
                    this.employees.splice(i, 1);
                    res.status(204).send({ message: 'success deletion' });
                    return;
                }
            }
            res.status(400).send({ message: "Can not find the ID: " + String(empID) });
        });
        this.express.use('/', router);
    }
    jsonifyEmployee(emp) {
        let json = { id: emp.ID, name: emp.name, salary: emp.salary, department: emp.department };
        return json;
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map