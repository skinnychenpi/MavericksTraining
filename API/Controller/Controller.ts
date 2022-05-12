import {Employee, Dept, employeeSchema} from '../Model/Employee'
import { RequestHandler } from 'express'

const employees: Employee[] = []


export function hello(req, res) {
    res.json({
        message: 'Hello World!'
      })
}

export const DisplayEmployees : RequestHandler = (req, res, next) => {
    res.json({Employees: employees})
}

export const createEmployee: RequestHandler = (req, res, next) => {
    const schemaCheckResult = employeeSchema.validate(req.body)
    if (schemaCheckResult.error) {
        res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
        return
    }


    var name = req.body.name;
    var id = req.body.id;
    var salary = req.body.salary;
    var department = req.body.department;

    var newEmployee = new Employee(id, name, salary, department);
    employees.push(newEmployee);
    res.status(200).json({CreatedEmployee: newEmployee})
}

export const getEmployeeByID: RequestHandler<{id:Number}> = (req, res, next) => {
    var empID = req.params.id
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i]
        if (emp.ID == empID) {
            res.json({employee: emp})
            return
        }
    }
    res.status(400).send({errorMessage: "No such employee with ID:" + String(empID)})
}

export const modifyEmployeeByID: RequestHandler<{id: Number}> = (req, res, next) => {
    var empID = req.params.id
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i]
        if (emp.ID == empID) {
            let body = req.body
            body.id = empID
            const schemaCheckResult = employeeSchema.validate(body)
            if (schemaCheckResult.error) {
                res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
                return
            }

            let newEmployee = new Employee(empID, body.name, body.salary, body.department)
            employees[i] = newEmployee
            res.json({modifiedEmployee: newEmployee})
            return
        }
    }
    res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
}

export const deleteEmployeeByID: RequestHandler<{id: Number}> = (req, res, next) => {
    var empID = req.params.id
    for (let i = 0; i < employees.length; i++) {
        var emp = employees[i]
        if (emp.ID == empID) {
            let deletedEmployee = employees[i]
            employees.splice(i, 1)
            res.json({deletedEmployee: deletedEmployee})
            return
        }
    }
    res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
}