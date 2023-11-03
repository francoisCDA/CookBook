import { useDispatch, useSelector } from "react-redux"
import { setFormMode, selectRecipe, axiosDeleteRecipe, axiosGetAllRecipes } from './recipesSlice.js'
import { useEffect } from "react"

const RecipeDisplay = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const recipes = useSelector(state => state.recipe.recipes)

  useEffect(() => {
    dispatch(axiosGetAllRecipes())
  }, [])


  const editForm = () => {
    dispatch(setFormMode("mettre à jour"))
    dispatch(selectRecipe(recipe))
  }


  return (

    <>
      <div className="row my-3">
        <div className="d-grid gap-2 col-4">
          {user && <Link to="/add" className="ms-2 btn-outline-secondary" onClick={() => dispatch(setFormMode("add"))}><i className="bi bi-plus-circle"></i> Add</Link>}
        </div>
      </div>
      <div>
        {recipes.length === 0 ?
          <p>Il n'y a aucune recette dans votre base de données</p> :
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
            {recipes.map(recipe =>

              <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={recipe.pictureURL} className="img-fluid rounded-start" alt="imageRecipe" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <p className="card-text"><small className="text-body-secondary">`temps de préparation : ${recipe.prepTime} min`</small></p>
                      <p className="card-text"><small className="text-body-secondary">`temps de cuisson : ${recipe.cookTime} min`</small></p>
                      <Link to="/DetailRecipe" className="ms-2 btn-outline-secondary" >Voir détails</Link>                    
                    </div>
                  </div>
                </div>
                {user && (
                  <>
                    <Link to={`/edit/${recipe.id}`} className="p-2 py-1 btn btn-outline-warning ms-auto" onClick={() => editForm()}><i className="bi bi-pencil-square"></i></Link>
                    <button className="p-2 py-1 btn btn-outline-danger ms-2" onClick={() => dispatch(axiosDeleteRecipe(recipe.id))}><i className="bi bi-trash"></i></button>
                  </>
                )}
              </div>
            )}
          </div>
        }
      </div>
    </>
  )
}

export default RecipeDisplay