import express from "express";
import { RecetteDAO } from "../dao/RecettesDAO.js";
import { chkAuth } from "../middleware/chkAuth.js";

const recetteDao = new RecetteDAO();
recetteDao.initLstRecettes();

const recettes = express.Router();

recettes.get('/', (req,res) => {
    res.json(recetteDao.getAll())
})

recettes.get('/:id', (req,res) => {
    res.json(recetteDao.getRecetteById(req.params.id))
})

recettes.post('/',chkAuth, (req,res) =>  {
    res.json(recetteDao.postRecette(req.body))
})

recettes.put('/:id',chkAuth, (req,res) => {
    if (req.params.id == req.body.id) {
        res.json(recetteDao.patchRecette(req.body))
    }
    res.sendStatus(400);
})

recettes.delete('/:id', chkAuth, (req, res) => {
    res.json(recetteDao.delRecette(req.params.id))
})

export default recettes