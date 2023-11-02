import { v4 as uuidv4 } from "uuid"

export class Recette {
    constructor(nom,ingredients,timeCook,timePrep,instructions,urlImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Beer_mug_transparent.png/220px-Beer_mug_transparent.png' ) {
        this.id = uuidv4() ;
        this.nom = nom ;
        this.ingredients = ingredients ;
        this.timeCook = timeCook ; 
        this.timePrep = timePrep ;
        this.instructions = instructions ;
        this.urlImage = urlImage ;
    }
}