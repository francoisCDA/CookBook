import express from "express";
import { IngredientDAO } from "../dao/IngredientsDAO.js";
import { chkAuth } from "../middleware/chkAuth.js";

const ingredientDao = new IngredientDAO();
ingredientDao.initLstIngredients();

const ingredients = express.Router();

ingredients.get('/', (req,res) => {
    res.json(ingredientDao.getAll())
})

ingredients.get('/:id', (req,res) => {
    res.json(ingredientDao.getIngreById(req.params.id))
})

ingredients.post('/', chkAuth, (req,res) =>  {
    res.json(ingredientDao.postIngre(req.body))
})

ingredients.put('/:id', chkAuth, (req,res) => {
    if (req.params.id == req.body.id) {
        res.json(ingredientDao.patchIngre(req.body))
    }
    res.sendStatus(400);
})

ingredients.delete('/:id', chkAuth, (req, res) => {
    res.json(ingredientDao.delIngredient(req.params.id))
})

export default ingredients