import  Express  from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import {ErrorMiddleware} from "./error/error.js";
import ReservationRoute from "./routes/reservationRoute.js";

const app = Express();
dotenv.config({path: './config/config.env'})


app.use(cors ({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true,
}))


app.use(Express.json())
app.use(Express.urlencoded({ extended: true}));
app.use('/api/reservation', ReservationRoute)



dbConnection();

app.use(ErrorMiddleware)


export default app; 
