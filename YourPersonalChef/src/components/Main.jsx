import React from "react"
export default function Main(){

const [ingredients , setIngredients]=React.useState([])

 const ingredientsListItems = ingredients.map(ingredient =>(
  <li key={ingredient}>{ingredient}</li>
 ))


 function addIngredient(formData){
  const newIngredient = formData.get("ingredient")//form name here 
  setIngredients(prevIngredient=> ( [...prevIngredient,newIngredient]))
 }


  return (
    <main>
      <form action={addIngredient}className="add-ingredient-form" >
        <input 
        type = "text"
        placeholder="e.g. salt"
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
      {ingredientsListItems}
      </ul>
    </main>
  )
}