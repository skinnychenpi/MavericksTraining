import router from './Routes/Router'
import { json } from 'body-parser'
import express, {Request, Response, NextFunction} from 'express'
import { Sequelize } from 'sequelize'
import {config, sequelizeConfig} from './configuration'
import connection from './DB/config'
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ErrorMessage: err.message})
})

app.use('/', router);



connection.sync().then(() => {
  console.log("Database is synced......")
}).catch((err) => {
  console.log("Database can't be synced, the error is: " + err)
})

app.listen(5000)