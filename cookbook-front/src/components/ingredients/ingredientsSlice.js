import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import 'dotenv/config';

const login = process.env.LOGIN ;
const password = process.env.PASSWORD ;
const monCredentials = btoa(login +':'+password) ;

const URL_Adress = process.env.URL_DATABASE + 'ingredients';

export const axiosGetAllIngredients =  createAsyncThunk(
    "ingredients/axiosGetAllIngredients",
    async () => {
        try {
            const reponse = await axios.get(URL_Adress);
            return reponse.data
        } catch (error) {
            console.error(error.message)
        }
    }
)

export const axiosPostIngredient = createAsyncThunk(
    "ingredients/axiosPostIngredient",
    async (newIngre) => {
        try {
            const reponse = await axios.post(URL_Adress, newIngre, {headers:{Authorization:'Basic '+ monCredentials }});
            return reponse.data ;
        } catch (error) {
            console.error(error.message)
        }
    }
)



const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState: {
        ingredients: [],
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(axiosGetAllIngredients.fulfilled, (state,action) => {
            state.ingredients = action.payload
        })
    }
})