import { v4 as uuidv4 } from "uuid"

export class Recette {
    constructor(nom,ingredients,timeCook,timePrep,instructions,urlImage ) {
        this.id = uuidv4() ;
        this.nom = nom ;
        this.ingredients = ingredients ;
        this.timeCook = timeCook ; 
        this.timePrep = timePrep ;
        this.instructions = instructions ;
        this.urlImage = urlImage ;
    }
}