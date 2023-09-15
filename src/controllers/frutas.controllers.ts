import { db } from "../connection/db.connection";
import frutasService from "../services/frutas.services";
import { Request, Response } from 'express'; 


async function createFruit(req: Request, res: Response) {
    const { name, price } = req.body;
    const fruta = await frutasService.addFruit(name, price);       
    res.send(fruta)
 }


 export async function getFruits(req: Request, res: Response) {
    try {
        const fruits = await frutasService.getFruits();
        res.json(fruits);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar as frutas.' });
    }
}

export async function updateFruit(req: Request, res: Response) {
    const {  name, price } = req.body;
    const fruta = await frutasService.updateFruta(name, price);
    res.json(fruta);  
}

export async function deleteFruit(req: Request, res: Response) {
    const { id } = req.params;
    await frutasService.deleteFruit(Number(id));
    res.status(204).send();
}

const frutasControllers =
 { createFruit, getFruits, updateFruit, deleteFruit };

export default frutasControllers