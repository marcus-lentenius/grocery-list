import React, { useContext, useEffect, useState } from 'react'
import AppData from '../App'

const ListOfRecipes = () => {
  const data = useContext(AppData)
  const [recipes, setRecipes] = useState(undefined)

  useEffect(() => {
    console.log(data.recipes)
    setRecipes((data.recipes))
  }, [data])

  const Render = () => (
    <>
      {recipes.map(recipe => (
        <>
          <p>{recipe.name}</p>
          <p>{recipe.id}</p>
          {recipe.ingredients.map(ingredient => (
            <p>{ingredient.amount} {ingredient.ingredient}</p>
          ))}
        </>
      ))
      }
    </>
  )

  return (
    <>
      {
        recipes !== undefined ? <Render/> : null
      }
    </>
  )
}

export default ListOfRecipes