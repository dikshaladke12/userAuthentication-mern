import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import Routes from './src/commonRoutes'


const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use("", express.static(path.join("UserImages")));
app.use(cors({origin:'*'}))

app.use('/app',Routes())


export default app;