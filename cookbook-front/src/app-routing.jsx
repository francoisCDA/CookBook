import { createBrowserRouter } from "react-router-dom";
import SignForm from "./components/auth/SignForm.jsx";
import RecipeForm from "./components/recipes/RecipeForm.jsx";
import App from "./App.jsx";
import DetailsRecipe from "./components/recipes/DetailsRecipe.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/RecipeForm",
        element: <RecipeForm />
    },
    {
        path: "/SignForm",
        element: <SignForm />
    },
    {
        path: "/DetailRecipe",
        element: <DetailsRecipe />
    }

])

export default router