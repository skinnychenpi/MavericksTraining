import {Employees, employeeSchema} from './Employee.model'


export class EmployeeService {


    getEmployees = async () : Promise<Employees[]> => {
        return await Employees.findAll()
    }

    createEmployee = async(employee) : Promise<Employees> => {
        await employeeSchema.validateAsync(employee)
        // if (schemaCheckResult.error) {
        //     res.status(400).json({ErrorMessage: schemaCheckResult.error.details[0].message})
        //     return
        // }
        return await Employees.create(employee)
    }

    modifyEmployeeByID = async(employee) : Promise<[affectedCount: number]> => {
        await employeeSchema.validateAsync(employee)
        return await Employees.update(
            {name: employee.name, salary: employee.salary, department: employee.department}, 
            {where: {id : employee.id}})
    }

    getEmployeeByID = async(empID) : Promise<Employees[]> => {
        return await Employees.findAll({
            where: {
                id : empID
            }
        })
    }

    deleteEmployeeByID = async(empID) : Promise<number> => {
        return await Employees.destroy({
            where: {
                id : empID
            }
        })
    }

}