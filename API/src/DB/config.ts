import {Sequelize} from 'sequelize-typescript'

import {Employees} from '../Employee/Employee.model'

import {User} from '../Auth/Auth.model';

import dotenv from 'dotenv';

dotenv.config();
const connection = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: "postgres",
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    models: [Employees, User]
})

export default connection