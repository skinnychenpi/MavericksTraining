import {Employees, employeeSchema} from '../Model/Employee'
import { RequestHandler } from 'express'


export function hello(req, res) {
    res.json({
        message: 'Hello World!'
      })
}

export const DisplayEmployees : RequestHandler = async (req, res, next) => {
    const allEmployees = await Employees.findAll()
    res.json({Employees: allEmployees})
}

export const createEmployee: RequestHandler = async (req, res, next) => {
    const schemaCheckResult = employeeSchema.validate(req.body)
    if (schemaCheckResult.error) {
        res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
        return
    }
    Employees.create(req.body)
    .then((employees) => {
        res.status(200).json({employeesCreated: req.body})
        console.log(employees)
    })
    .catch((err) => {
        res.status(400).json({errorMessage: err})
    })

}

export const getEmployeeByID: RequestHandler<{id:Number}> = async (req, res, next) => {
    var empID = req.params.id
    Employees.findAll({
        where: {
            id : empID
        }
    }).then((results) => {
        res.status(200).json({employee: results})
    }).catch((err) => {
        res.status(400).json({errorMessage: err})
    })

}

export const modifyEmployeeByID: RequestHandler<{id: Number}> = async (req, res, next) => {
    var empID = req.params.id
    let body = req.body
    body.id = empID
    const schemaCheckResult = employeeSchema.validate(body)
    if (schemaCheckResult.error) {
        res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
        return
    }

    Employees.update(
        {name: body.name, salary: body.salary, department: body.department}, 
        {where: {id : empID}
    }).then((result) => {
        res.status(200).json({employee: result})
    }).catch((err) => {
        res.status(400).json({errorMessage: err})
    })



}

export const deleteEmployeeByID: RequestHandler<{id: Number}> = async (req, res, next) => {
    var empID = req.params.id

    Employees.destroy(
    {where: {
        id : empID
    }
    }).then((result) => {
        res.status(200).json({employee: result})
    }).catch((err) => {
        res.status(400).json({errorMessage: err})
    })
    
}