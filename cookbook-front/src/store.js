import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./components/recipes/recipesSlice.js";
import ingredientsSlice from "./components/ingredients/ingredientsSlice.js";
import authSlice from "./components/auth/authSlice.js";


export default configureStore({
    reducer: {
        recipe: recipesSlice,   // le nom est au singulier dans le slice
        ingredients: ingredientsSlice,
        auth: authSlice
    }
})