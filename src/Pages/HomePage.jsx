import React from 'react'
import UseContentful from '../components/useContentful'
import NavBar from '../components/Navbar'

const HomePage = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.description}</p>
        </div>
      ))}      
    </div>
  )
}

export default HomePage