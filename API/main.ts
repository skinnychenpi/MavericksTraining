import router from './Routes/Router'
import { json } from 'body-parser'
import express, {Request, Response, NextFunction} from 'express'

const app = express();
app.use(json());

app.use('/', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ErrorMessage: err.message})
})

app.listen(3000)