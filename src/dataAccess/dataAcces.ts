import axios from 'axios';
import { Recipe, Ingredient } from '../models/models';
import * as dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT
const URL = `http://localhost:${PORT}`


export const getRecipes = async (): Promise<Recipe[]> => {
    try{
        const res = await axios.get(`${URL}/recipes`);
        return res.data as Recipe[];

    }catch (err) {
        console.error(err)
        throw err

    }
}





