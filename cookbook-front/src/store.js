import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./components/recipes/recipesSlice.js";


export default configureStore({
    reducer: {
        recipes: recipesSlice
    }
})