import express from "express";
import { IngredientDAO } from "../dao/IngredientsDAO.js";


const ingredientDao = new IngredientDAO();
ingredientDao.initLstIngredients();

const ingredients = express.Router();

ingredients.get('/', (req,res) => {
    res.json(ingredientDao.getAll())
})

ingredients.get('/:id', (req,res) => {
    res.json(ingredientDao.getIngreById(req.params.id))
})

ingredients.post('/', (req,res) =>  {
    res.json(ingredientDao.postIngre(req.body))
})

ingredients.put('/:id', (req,res) => {
    if (req.params.id == req.body.id) {
        res.json(ingredientDao.patchIngre(req.body))
    }
    res.sendStatus(400);
})

ingredients.delete('/:id', (req, res) => {
    res.json(ingredientDao.delIngredient(req.params.id))
})

export default ingredients