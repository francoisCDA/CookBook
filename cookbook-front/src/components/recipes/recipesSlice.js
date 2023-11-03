
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




const URL_Adress = 'http://127.0.0.1:3333/' + 'recipes';

export const axiosGetAllRecipes = createAsyncThunk(
    "recipe/axiosGetAllRecipes",
    async () => {
        try {
            const reponse = await axios.get(`${URL_Adress}`);
            return reponse.data
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosPostRecipe = createAsyncThunk(
    "recipe/axiosPostRecipe", 
    async ({newRecipe, monCredentialsBase64}) => {
        try {
            const reponse = await axios.post(`${URL_Adress}`, newRecipe, { headers: {'Authorization': `Bearer ${monCredentialsBase64}` }})
            return reponse.data;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosDeleteRecipe = createAsyncThunk(
    "recipe/axiosDeleteRecipe",
    async ({id, monCredentialsBase64}) => {
        try {
            const reponse = await axios.delete(`${URL_Adress}/${id}`, { headers: {'Authorization': `Bearer ${monCredentialsBase64}` }})
            return id;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosGetRecipeById = createAsyncThunk(
    "recipe/axiosGetRecipeById",
    async (id) => {
        try {
            const reponse = await axios.get(`${URL_Adress}/${id}`)
            return reponse.data;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosUpdateRecipe = createAsyncThunk(
    "recipe.axiosUpdateRecipe",
    async ({ id, recipe,monCredentialsBase64 }) => {
        try {
            const reponse = await axios.put(`${URL_Adress}/${id}`, recipe, { headers: {'Authorization': `Bearer ${monCredentialsBase64}` }})
            return reponse.data;
        } catch (error) {
            console.error(error.message);
        }
    }
)

const recipesSlice = createSlice({

    name: "recipe", // le nom est au singulier, c'est donc ce qu'il faut indiquer dans le store, et dans les useSelector(state => state.recipe.xxxxx)
    initialState: {
        recipes: [],
        recipeSelected: false,
        formMode: '',

        // filtreMode: a rajouter si necessaire
    },
    reducers: {
        selectRecipe: (state, action) => {
            state.recipeSelected = action.payload;
        },
        setFormMode: (state, action) => {
            state.formMode = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetAllRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload;
        })
        builder.addCase(axiosPostRecipe.fulfilled, (state, action) => {
            state.recipes.push(action.payload)
        })
        builder.addCase(axiosDeleteRecipe.fulfilled, (state, action) => {
            state.recipes = state.recipes.filter(r => r.id == action.payload); // à vérifier, mais pour le delete, ça ne devrait pas être action.payload, car ce n'est pas un objet qui est renvoyé
        })
        builder.addCase(axiosUpdateRecipe.fulfilled, (state, action) => {
            const idx = state.recipes.findIndex(r => r.id == action.payload.id);
            state.recipes[idx] = action.payload;
        })
    }

})

export const { selectRecipe, setFormMode } = recipesSlice.actions
export default recipesSlice.reducer