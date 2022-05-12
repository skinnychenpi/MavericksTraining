import {Employee, Dept, employeeSchema} from '../Model/Employee'
import { RequestHandler } from 'express'
import {query} from '../main'


export function hello(req, res) {
    res.json({
        message: 'Hello World!'
      })
}

export const DisplayEmployees : RequestHandler = (req, res, next) => {
    query('select * from employees e order by e.id',[],(err, result) => {
        if (err) {
            res.status(400).json({errorMessage: err})
            return;
        }
        res.json({Employees: result.rows})
    })

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

    const queryText = 'INSERT INTO employees(id,name,salary,department) VALUES($1,$2,$3,$4)'
    query(queryText, [id, name, salary, department], (err, result) => {
        if (err) {
            res.status(400).json({errorMessage: err})
            return;
        }
        res.status(200).json({CreatedEmployee: req.body})
    })

}

export const getEmployeeByID: RequestHandler<{id:Number}> = (req, res, next) => {
    var empID = req.params.id

    const queryText = 'select * from employees e where e.id = $1'

    query(queryText, [empID], (err, result) => {
        if (err) {
            res.status(400).json({errorMessage: err})
            return;
        }
        if (result.rowCount == 1) res.json({Employee: result.rows[0]})
        else res.status(400).send({errorMessage: "No such employee with ID:" + String(empID)})
    })
}

export const modifyEmployeeByID: RequestHandler<{id: Number}> = (req, res, next) => {
    var empID = req.params.id

    const queryText = 'update employees set name = $1, salary = $2, department = $3 where id = $4'
    let body = req.body
    body.id = empID
    const schemaCheckResult = employeeSchema.validate(body)
    if (schemaCheckResult.error) {
        res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
        return
    }

    query(queryText, [body.name, body.salary, body.department,empID], (err, result) => {
        if (err) {
            res.status(400).json({errorMessage: err})
            return
        }
        if (result.rowCount == 1) res.json({Employee: body})
        else res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
    })

}

export const deleteEmployeeByID: RequestHandler<{id: Number}> = (req, res, next) => {
    var empID = req.params.id

    const queryText = 'delete from employees where id = $1'

    query(queryText, [empID], (err, result) => {
        if (err) {
            res.status(400).json({errorMessage: err})
            return
        }
        if (result.rowCount == 1) res.json({message: 'Deleted Successfully'})
        else res.status(400).json({errorMessage: "No such employee with ID:" + String(empID)})
    })
}