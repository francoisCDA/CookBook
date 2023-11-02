import {readFileSync,writeFileSync} from "fs"
import { resolve } from "path"
import { Ingredient } from "../classes/Ingredient.js"

export class IngredientDAO {
    constructor() {
        this.dbIngredients = resolve('./DB_COOKBOOK/ingredients.json')
        this.ingredients = [] ;
    }

    initLstIngredients() {
        const DB = readFileSync(this.dbIngredients, {encoding:'utf-8'});
        this.ingredients = [] ;
    }

    saveLstIngredients() {
        writeFileSync(this.dbIngredients, JSON.stringify(this.ingredients))
    }

    getAll() {
        return this.ingredients;
    }

    getIngreByID(id) {
        const ingre = this.ingredients.find( ing => ing.id ==  id ) ;
        if (ingre) {
            return ingre
        }
        return {error: `id ingredient inconnu : ${id}`}
    }

    postIngre({nom}) {
        const newIngre = new Ingredient(nom);
        this.ingredients.push(newIngre);
        this.saveLstIngredients();
        return newIngre;
    }

    patchIngre({id,nom}) {
        const indx = this.ingredients.findIndex( ing => ing.id == id ) ;
        if (indx == -1 ) { return {error: `id ingredient inconnu : ${id}`}}
        this.ingredients[indx].nom == nom ;
        this.saveLstIngredients();
        return this.ingredients[indx] ;
    }

    delIngredient(id) {
        this.ingredients = this.ingredients.filter( ing => ing.id != id)
        this.saveLstIngredients();
    }

}