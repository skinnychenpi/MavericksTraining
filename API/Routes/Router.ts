import {Router} from 'express'
import {createEmployee, hello, getEmployeeByID, modifyEmployeeByID, deleteEmployeeByID, DisplayEmployees} from '../Controller/Controller'

const router = Router();

router.get('/', hello);

router.get('/employee', DisplayEmployees);

router.post('/employee', createEmployee);

router.get('/employee/:id', getEmployeeByID);

router.put('/employee/:id', modifyEmployeeByID);

router.delete('/employee/:id', deleteEmployeeByID);

export default router