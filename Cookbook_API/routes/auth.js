import express  from "express";
import { chkAuth } from "../middleware/chkAuth.js";


const auth = express.Router();


auth.post('/', chkAuth, (req,res) => {
    res.json({ admin: true }) // a priori c'est ici qu'on devrait renvoyer un vrai token, mais un true c'est bien aussi, surtout que dans l'idée il faudrait un autre middleware pour le token, alors que je n'ai toujours pas essayé celui là...
})

export default auth