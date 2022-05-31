"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_controller_1 = require("../Employee/Employee.controller");
const Auth_controller_1 = require("../Auth/Auth.controller");
const RouterProvider_1 = require("./RouterProvider");
const connectedRoutes = [{
        method: RouterProvider_1.HttpMethod.GET,
        path: '/employee',
        handlers: [Employee_controller_1.getEmployees]
    }];
const nonConnectedRoutes = [{
        method: RouterProvider_1.HttpMethod.POST,
        path: '/login',
        handlers: [Auth_controller_1.login]
    },
    {
        method: RouterProvider_1.HttpMethod.POST,
        path: '/register',
        handlers: [Auth_controller_1.register]
    }];
// router.get('/', hello);
// router.get('/employee', getEmployees);
// router.post('/employee', createEmployee);
// router.get('/employee/:id', getEmployeeByID);
// router.put('/employee/:id', modifyEmployeeByID);
// router.delete('/employee/:id', deleteEmployeeByID);
// // Authentication
// router.post('/register', register);
// router.post('/login', login);
exports.default = (0, RouterProvider_1.routerProvider)(nonConnectedRoutes, connectedRoutes);
//# sourceMappingURL=Router.js.map