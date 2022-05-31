import {Employees, employeeSchema} from './Employee.model'
import { RequestHandler } from 'express'
import {EmployeeService} from './Employee.service'




export function hello(req, res) {
    res.send({
        message: 'Hello World!'
      })
}

export const getEmployees : RequestHandler = async (req, res, next) => {
    const service = new EmployeeService();
    console.log('service');
    const emp = await service.getEmployees()
    res.send({Employees: emp})
}

export const createEmployee: RequestHandler = async (req, res, next) => {
    const service = new EmployeeService();
    service.createEmployee(req.body)
    .then((employee) => {
        res.send({createdEmployee: employee})
    })
    .catch((err) => {
        res.status(400).send({errorMessage: "Errors!"})
    })

}

export const getEmployeeByID: RequestHandler<{id:Number}> = async (req, res, next) => {
    const service = new EmployeeService();
    service.getEmployeeByID(req.params.id)
    .then((employees) => {
        res.send({employeeFound: employees})
    })
    .catch((err) => {
        res.status(400).send({errorMessage: "Errors!"})
    })

}

export const modifyEmployeeByID: RequestHandler<{id: Number}> = async (req, res, next) => {
    var empID = req.params.id
    let employee = req.body
    employee.id = empID
    
    const service = new EmployeeService();
    service.modifyEmployeeByID(employee)
    .then((numbers) => {
        if (numbers[0] > 0) res.send({message: 'Success'})
        else res.status(400).send({message: 'Cannot find employees with ID:' + empID})
    })
    .catch((err) => {
        res.status(400).send({message: "Errors!"})
    })

}

export const deleteEmployeeByID: RequestHandler<{id: Number}> = async (req, res, next) => {
    var empID = req.params.id

    const service = new EmployeeService();
    service.deleteEmployeeByID(empID)
    .then((number) => {
        if (number == 1) {
            res.send({message: 'Success'})
        } else {
            res.status(400).send({message: 'Cannot find employees with ID:' + empID})
        }
    })
    .catch((err) => {
        res.status(400).send({message: "Errors!"})
    })
    
}