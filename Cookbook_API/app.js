import express from 'express';
import recettes from './routes/recettes.js';
import ingredients from './routes/ingredients.js';
import cors from 'cors';
import auth from './routes/auth.js';


const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/recipes', recettes);
app.use('/ingredients', ingredients);
app.use('/admin', auth);


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
    console.log(`http://127.0.0.1:${port}/recipes`)
    console.log(`http://127.0.0.1:${port}/ingredients`)
    console.log(`http://127.0.0.1:${port}/admin`)
})