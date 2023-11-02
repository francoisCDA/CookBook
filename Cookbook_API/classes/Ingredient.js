import { v4 as uuidv4 } from "uuid"

export class Ingredient {
    constructor(nom) {
        this.id = uuidv4();
        this.nom = nom ;
    }
}