import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { axiosPostRecipe, axiosUpdateRecipe } from "./recipesSlice.js";
import { useNavigate } from "react-router-dom";

const RecipeForm = () => {
    const ingredients = useSelector(state => state.recipes.ingredients)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mode = useSelector(state => state.recipe.formMode)
    const recipe = useSelector(state => state.recipe.recipeSelected)

    const titleRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const instructionsRef = useRef()
    const ingredientsRef = useRef()
    const ingredientQuantityRef = useRef()
    const ingredientsUnityRef = useRef()
    const pictureURLRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()
        const selectedIngredients = []

        for (const option of ingredientsRef.current.options) {
            if (option.selected) {
                selectedIngredients.push({ id: option.value, name: option.textContent })
            }
        }

        const newRecipe = {
            // title: titleRef.current.value,
            // cookTime: +cookTimeRef.current.value,
            // prepTime: +prepTimeRef.current.value,
            // instructions: instructionsRef.current.value,
            // ingredientQuantity: +ingredientQuantityRef.current.value,
            // ingredients: selectedIngredients,
            // ingredientsUnity: ingredientsUnityRef.current.value,
            // pictureURL : pictureURLRef.current.value
        }

        if (mode === "ajouter") {
            dispatch(axiosPostRecipe(newRecipe))
        } else if (mode === "mettre à jour") {
            dispatch(axiosUpdateRecipe({ ...newRecipe, id: recipe.id }))
        }
        dispatch(setFormMode(""))
        navigate("/")

    }

    return (
        <>
            <h1>{mode} une recette</h1>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titre :</label>
                    <input type="text" className="form-control" required ref={titleRef} defaultValue={recipe?.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cookTime" className="form-label">Temps de cuisson:</label>
                    <input type="number" className="form-control" required min={1} ref={cookTimeRef} defaultValue={recipe?.cookTime} />
                </div>
                <div className="mb-3">
                    <label htmlFor="prepTime" className="form-label">Temps de préparation:</label>
                    <input type="number" className="form-control" required min={1} ref={prepTimeRef} defaultValue={recipe?.prepTime} />
                </div>
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions:</label>
                    <textarea className="form-control" cols={30} rows={10} required ref={instructionsRef} defaultValue={recipe?.instructions} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients:</label>
                    <label htmlFor="quantity">Quantité :</label>
                    <input type="number" className="form-control" required ref={ingredientQuantityRef} />
                    <select name="ingredients" id="ingredients" className="form-select" required multiple ref={ingredientsRef} defaultValue={recipe?.ingredient}>
                        {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
                    </select>
                    <label htmlFor="ingredientsUnity" className="form-label">Unité :</label>
                    <input type="text" className="form-control" required ref={ingredientsUnityRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pictureURL" className="form-label">Image URL: </label>
                    <input type="text" className="form-control" required ref={pictureURLRef} defaultValue={recipe?.pictureURL} />
                </div>
                <div clasName="text-end">
                    <button className={`btn btn-${mode === 'add' ? 'success' : 'warning'}`}><i className={`bi bi-${mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i>{mode}</button>
                </div>
            </form >
        </>
    );
}

export default RecipeForm