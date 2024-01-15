import React from 'react'

const RecipeCard = ({recipe}) => {

  return (
    <>
    <div className='recipe-card-container'>
        <div className='recipe-card'>
            <div className='recipe-card-image'>
            <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className='recipe-card-content'>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            </div>
        </div> 

    </div>
    </>
  )
}

export default RecipeCard