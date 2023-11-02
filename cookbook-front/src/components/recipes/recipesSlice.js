import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL_Adress = "http://127.0.0.1:3333/"

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
    "trackerpro/axiosPostRecipe",
    async (newRecipe) => {
        try {
            const reponse = await axios.post(`${URL_Adress}`, newRecipe)
            return reponse.data;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosDeleteRecipe = createAsyncThunk(
    "trackerpro/axiosDeleteRecipe",
    async (id) => {
        try {
            const reponse = await axios.delete(`${URL_Adress}/${id}`)
            return id;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const axiosGetRecipeById = createAsyncThunk(
    "trackerpro/axiosGetRecipeById",
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
    "trackerpro.axiosUpdateRecipe",
    async ({ id, recipe }) => {
        try {
            const reponse = await axios.put(`${URL_Adress}/${id}`, recipe)
            return reponse.data;
        } catch (error) {
            console.error(error.message);
        }
    }
)

const recipesSlice = createSlice({

    name: "recipe",
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
            state.recipes = state.recipes.filter(r => r.id == action.payload.id);
        })
        builder.addCase(axiosUpdateRecipe.fulfilled, (state, action) => {
            const idx = state.recipes.findIndex(r => r.id == action.payload.id);
            state.recipes[idx] = action.payload;
        })
    }

})

export const { } = recipesSlice.actions
export default recipesSlice.reducer