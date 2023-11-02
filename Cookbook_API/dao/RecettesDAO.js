import {readFileSync,writeFileSync} from "fs"
import { Recette } from "../classes/Recette.js"
import { resolve } from "path"

export class RecetteDAO {
    constructor() {
        this.dbRecettes = resolve('./DB_COOKBOOK/recettes.json');
        this.recettes = [] ;
    }

    initLstRecettes() {
        const DB = readFileSync(this.dbRecettes, {encoding:"utf-8"});
        this.recettes = JSON.parse(DB);
    }

    saveLstRecettes() {
        writeFileSync(this.dbRecettes, JSON.stringify(this.recettes));
    }

    getAll() {
        return this.recettes;
    }

    getRecetteById(id) {
        const recipie = this.recettes.find( re => re.id == id);
        if (recipie) return recipie;
        return {error: `id recette inconnu : ${id}`}
    }

    postRecette({nom,ingredients,timeCook,timePrep,instructions,urlImage}) {
        const newRecipie = new Recette(nom,ingredients,timeCook,timePrep,instructions,urlImage);
        this.recettes.push(newRecipie);
        this.saveLstRecettes();
        return newRecipie ;
    }

    patchRecette({id,nom,ingredients,timeCook,timePrep,instructions,urlImage}) {
        const indx = this.recettes.findIndex( re => re.id == id)
        if (indx == -1 ) { return {error: `id recette inconnu : ${id}`} }
        this.recettes[indx].nom = nom;
        this.recettes[indx].ingredients = ingredients;
        this.recettes[indx].timeCook = timeCook;
        this.recettes[indx].timePrep = timePrep;
        this.recettes[indx].instructions = instructions;
        this.recettes[indx].urlImage = urlImage;
        this.saveLstRecettes();
        return this.recettes[indx] ; 
    }

    delRecette(id) {
        this.recettes = this.recettes.filter(re => re.id != id)
        this.saveLstRecettes();
    }

}