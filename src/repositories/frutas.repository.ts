import { QueryResult } from "pg";
import { db } from "../connection/db.connection";

export async function addFruitRP(name: string, price: number): Promise<any> {
        const result: QueryResult = await db.query('INSERT INTO frutas (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
        return result.rows[0];     
}

export async function updateFruitRP( name: string, price: number): Promise<any> {   
        const result: QueryResult = await db.query('UPDATE frutas SET name = $1, price = $2 WHERE  RETURNING *', [name, price]);
        return result.rows[0];   
}

export async function getFruitsRP(): Promise<any[]> {  
        const result: QueryResult = await db.query('SELECT * FROM frutas');
        return result.rows;  
}

export async function deleteFruitRP(id: number): Promise<void> {
       await db.query('DELETE FROM frutas WHERE id = $1', [id]);
}

const fruitsRepository = {
    addFruitRP,
    updateFruitRP,
    getFruitsRP,
    deleteFruitRP
}

export default fruitsRepository
