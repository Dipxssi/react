import React from "react"
import Recipe from "./Recipe.jsx"
import IngredientList from "./IngredientList.jsx"
import { getRecipeFromMistral } from "../ai.js"

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState("")

  const recipeSection = React.useRef(null)
  
  React.useEffect(() => {
    if(recipe !=="" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior:"smooth"})
    } 
  },[recipe])


  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }


  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredient => ([...prevIngredient, newIngredient]))
  }


  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form" >
        <input
          type="text"
          placeholder="e.g. salt"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 &&
        <IngredientList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe} />
      }

      {recipe && <Recipe recipe={recipe} />}
    </main>
  )
}