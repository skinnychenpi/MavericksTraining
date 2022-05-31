import {createEmployee, hello, getEmployeeByID, modifyEmployeeByID, deleteEmployeeByID, getEmployees} from '../Employee/Employee.controller'
import {register, login} from '../Auth/Auth.controller'
import {HttpMethod, RouteConfig, routerProvider} from './RouterProvider'
const connectedRoutes = [{
    method: HttpMethod.GET,
    path: '/employee',
    handlers: [getEmployees]
}]
const nonConnectedRoutes = [{
    method: HttpMethod.POST,
    path: '/login',
    handlers: [login]
},
{
    method: HttpMethod.POST,
    path: '/register',
    handlers: [register]
}]

// router.get('/', hello);

// router.get('/employee', getEmployees);

// router.post('/employee', createEmployee);

// router.get('/employee/:id', getEmployeeByID);

// router.put('/employee/:id', modifyEmployeeByID);

// router.delete('/employee/:id', deleteEmployeeByID);

// // Authentication
// router.post('/register', register);

// router.post('/login', login);





export default routerProvider( nonConnectedRoutes, connectedRoutes)