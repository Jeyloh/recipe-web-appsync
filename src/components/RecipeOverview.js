import React from 'react'


const RecipeOverview = (props) => {
  console.table(props.recipes);
  if (!props.recipes) return null

  return props.recipes.map((recipe, index) => {
    return (
      <div style={styles.recipeContainer} key={index}>
        <div style={styles.singleLine}>
          <span onClick={() => props.deleteRecipeById(recipe.id)} role="img" aria-label="Logo" alt="cooking-pot">❌</span>
          <h2>{recipe.name}</h2>
        </div>
        <h3>Ingredients:</h3>
        { recipe.ingredients.map((ing, index) => (
          <p key={index}>{ing}</p>
        ))
        }
        <h3>Directions:</h3>
        { recipe.directions.map((dir, index) => (<p key={index}>{dir}</p>)) }
      </div>
    )
  })

}

const styles = {
  recipeContainer: {
    textAlign: 'left',
    margin: 50,
    borderBottom: '1px solid black',
  },
  singleLine: {
    display: 'flex',
    alignItems: 'center',
  }
}
export default RecipeOverview
