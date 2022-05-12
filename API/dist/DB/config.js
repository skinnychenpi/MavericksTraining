"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Employee_1 = require("../Model/Employee");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "iamtimmy",
    database: "Mav-EmpAPI",
    logging: false,
    models: [Employee_1.Employees]
});
exports.default = connection;
//# sourceMappingURL=config.js.map