import React from "react"
import Recipe from "./Recipe.jsx"
import IngredientList from "./IngredientList.jsx"

export default function Main() {

  const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

  const [receipeShown, setRecipeShown] = React.useState(false)
  
 


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
      {ingredients.length > 0 && <IngredientList ingredients={ingredients} setRecipeShown={setRecipeShown}/> }
      {receipeShown && <Recipe/>}
    </main>
  )
}