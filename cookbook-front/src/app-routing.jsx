import { createBrowserRouter } from "react-router-dom";
import SignForm from "./components/auth/SignForm.jsx";
import App from "./App.jsx";
import DetailsRecipe from "./components/recipes/DetailsRecipe.jsx";
import RecipeForm from "./components/recipes/RecipeForm.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
        ]
    },
])

export default router