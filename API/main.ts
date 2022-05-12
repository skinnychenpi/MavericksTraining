import router from './Routes/Router'
import { json } from 'body-parser'
import express, {Request, Response, NextFunction} from 'express'
import { Pool } from 'pg'
import {config} from './configuration'

const pool = new Pool(config)

export const query = (sql, params, callback) => {
  return pool.query(sql, params, callback)
}


const app = express();
app.use(json());

app.use('/', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ErrorMessage: err.message})
})

app.listen(3000)