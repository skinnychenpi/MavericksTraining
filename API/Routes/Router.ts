import {Router} from 'express'
import {createEmployee, hello, getEmployeeByID, modifyEmployeeByID, deleteEmployeeByID, getEmployees} from '../Employee/Employee.controller'

const router = Router();

router.get('/', hello);

router.get('/employee', getEmployees);

router.post('/employee', createEmployee);

router.get('/employee/:id', getEmployeeByID);

router.put('/employee/:id', modifyEmployeeByID);

router.delete('/employee/:id', deleteEmployeeByID);

export default router