import express from  "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import locationRouter from "./routes/LocationRoute.js";
import carRoutes from "./routes/CarRoutes.js";


const app = express()
const env =dotenv.config();


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/location',locationRouter);
app.use('/car',carRoutes);

const port = process.env['PORT'] || 8080
app.listen(port)
