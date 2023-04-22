import express from "express";
import addCar from "../controller/Cars/CarsAddController.js"
const carRouter = express.Router()

carRouter.post('/add',addCar)

export default carRouter

