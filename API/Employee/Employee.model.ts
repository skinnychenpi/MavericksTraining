// export type Dept = "MKT" | "HR" | "SD";
import {DataType, Table, Model, Column, PrimaryKey, AllowNull} from 'sequelize-typescript'

// export const Employee = sequelize.define('employee', {
//     ID: {
//         type: DataType.INTEGER,
//         primaryKey: true
//     },
//     name: {
//         type: DataType.STRING
//     },
//     salary: {
//         type: DataType.INTEGER
//     },
//     department: {
//         type: DataType.STRING
//     }
// }, {
//     tableName: 'employees'
// })

@Table({
    timestamps: false,
    tableName: 'employees'
})

export class Employees extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false, // This is for the database schema
        primaryKey: true
    })
    id! :number; // ! for ts type check

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name! :string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    salary! :number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    department! :string;
}




// export class Employee {
//     public name: String
//     public ID: Number
//     public salary: Number
//     public department: String

//     constructor(ID, name, salary, department : String) {
//         this.ID = ID
//         this.name = name
//         this.salary = salary
//         this.department = department
//     }
// }

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