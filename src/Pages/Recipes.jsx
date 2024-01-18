import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./Recipes.css"



const Recipes = ({recipes}) => {

  console.log(recipes)

    return (
      <div className='recipe-container'>
        <h2>List of Recipes</h2>
        
          <ul className='recipes-list'>
              {recipes &&
                recipes.map((recipe) => (
                  <li className="recipe-item" key={recipe.sys.id} >
                    <Link to={`/recipes/${recipe.sys.id}`} >
                  <div className='header-container'>
                    <h3>{recipe.fields.title}</h3>
                  </div>
                  <img className="recipe-image" src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
                  </Link>
                  </li>
                ))}
          </ul>
        
      </div>
    );
  };

export default Recipes