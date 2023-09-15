import fruitsRepository from "../repositories/frutas.repository";

export async function addFruit(name: string, price: number) {   
        const fruta = await fruitsRepository.addFruitRP(name, price);
        return fruta;
}

export async function updateFruta(name: string, price: number) {
        const fruta = await fruitsRepository.updateFruitRP(name, price);
        return fruta;  
}

export async function getFruits() {
        const fruits = await fruitsRepository.getFruitsRP();
        return fruits;
       
    } 

    export async function deleteFruit(id: number) { 
            await fruitsRepository.deleteFruitRP(id);        
    }

const frutasService = {
    addFruit,
    updateFruta,
    getFruits,
    deleteFruit
}

export default frutasService