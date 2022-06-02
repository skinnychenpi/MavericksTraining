import {createEmployee, hello, getEmployeeByID, modifyEmployeeByID, deleteEmployeeByID, getEmployees} from '../Employee/Employee.controller'
import {register, login} from '../Auth/Auth.controller'
import {HttpMethod, RouteConfig, routerProvider} from './RouterProvider'
const connectedRoutes = [
{
    method: HttpMethod.GET,
    path: '/employee',
    handlers: [getEmployees]
},
{
    method: HttpMethod.POST,
    path: '/employee',
    handlers: [createEmployee]
},
{
    method: HttpMethod.GET,
    path: "/employee/:id",
    handlers: [getEmployeeByID]
},
{
    method: HttpMethod.PUT,
    path: '/employee/:id',
    handlers: [modifyEmployeeByID]
},
{
    method: HttpMethod.DELETE,
    path: '/employee/:id',
    handlers: [deleteEmployeeByID]
}]

const nonConnectedRoutes = [{
    method: HttpMethod.POST,
    path: '/auth/login',
    handlers: [login]
},
{
    method: HttpMethod.POST,
    path: '/auth/register',
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