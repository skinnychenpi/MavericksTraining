import {Router} from 'express'
import {createEmployee, hello} from '../Controller/Controller'

const router = Router();

router.get('/', hello)

router.post('/employee', createEmployee);

export default router