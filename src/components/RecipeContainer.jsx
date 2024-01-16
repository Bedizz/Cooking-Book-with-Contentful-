import React, { useEffect,useState } from 'react'
import RecipeCard from './RecipeCard'



const RecipeContainer = ({recipes}) => {
    

    
  
    
        



  return (
    <div> 
        <h1>Recipe Container</h1>
        <RecipeCard />
        {/* {recipes.map((recipe,index) => {
        <RecipeCard key={index} recipe={recipe} /> })}
     */}
    
    </div>
  )
}

export default RecipeContainer