import Joi from "joi";
import Fruta from "../protocols/fruit.protocol";

const fruitSchema = Joi.object<Fruta>({
    name: Joi.string().required(),
    price: Joi.number().required(),
})

export default fruitSchema