import frutasControllers from "../controllers/frutas.controllers";
import { Router } from "express";
import fruitSchema from "../schemas/frutas.schemas";
import validateSchemaMiddleware from "../middlewares/validateSchema";

const frutasRouter = Router();

frutasRouter.get('/frutas', frutasControllers.getFruits);
frutasRouter.post('/frutas', validateSchemaMiddleware(fruitSchema), frutasControllers.createFruit );
frutasRouter.put('/frutas', validateSchemaMiddleware(fruitSchema), frutasControllers.updateFruit);
frutasRouter.delete('/frutas/:id', frutasControllers.deleteFruit);

export default frutasRouter