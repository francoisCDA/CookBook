import express from 'express';
import recettes from './routes/recettes.js';
import ingredients from './routes/ingredients.js';

const port = 3333;
const app = express();

app.use(express.json());

app.use('/recipes', recettes);
app.use('/ingredients', ingredients);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})