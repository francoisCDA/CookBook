import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import 'dotenv/config';

const login = process.env.LOGIN ;
const password = process.env.PASSWORD ;
const monCredentials = `${login}:${password}`;
const monCredentialsBase64 = Buffer.from(monCredentials).toString('base64');

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
            const reponse = await axios.post(URL_Adress, newIngre, {headers:{Authorization:'Basic '+ monCredentialsBase64,'Content-Type': 'application/json' }});
            return reponse.data ;
        } catch (error) {
            console.error(error.message)
        }
    }
)

export const axiosPutIngredient = createAsyncThunk(
    "ingredients/axiosPutIngredient",
    async ({id,udpIngre}) => {
        try {
            const reponse = await axios.put(URL_Adress+`/${id}`, udpIngre, {headers:{Authorization:'Basic '+ monCredentialsBase64,'Content-Type': 'application/json' }});
            return reponse.data ;
        } catch (error) {
            console.error(error.message)
        }        
    }
)

export const axiosDelIngredient = createAsyncThunk(
    "ingredients/axiosDelIngredient",
    async (id) => {
        try {
            const reponse = await axios.delete(URL_Adress+`/${id}`, {headers:{Authorization:'Basic '+ monCredentialsBase64}} )
            return id ;
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
        builder.addCase(axiosPutIngredient.fulfilled, (state,action) => {
            const idx = state.ingredients.findIndex( i => i.id == action.payload.id);
            state.ingredients[idx] = action.payload;
        })
        builder.addCase(axiosDelIngredient.fulfilled, (state,action) => {
            state.ingredients = state.ingredients.filter( i => i.id != action.payload)
        })
    }
})

//export const { } = ingredientsSlice.actions
export default ingredientsSlice.reducer