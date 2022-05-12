// export type Dept = "MKT" | "HR" | "SD";
export class Employee {
    public name: String
    public ID: Number
    public salary: Number
    public department: String

    constructor(ID, name, salary, department : String) {
        this.ID = ID
        this.name = name
        this.salary = salary
        this.department = department
    }
}

export enum Dept {
    MKT = "MKT",
    HR = "HR",
    SD = "SD"
}


const Joi = require('joi')

export const employeeSchema = Joi.object({
    name: Joi.string().alphanum()
    .min(2)
    .max(64)
    .required(),

    id: Joi.number().integer().min(0).required(),

    salary: Joi.number().integer().min(0).required(),

    department: Joi.string().valid(Dept.MKT, Dept.HR, Dept.SD).required()
})