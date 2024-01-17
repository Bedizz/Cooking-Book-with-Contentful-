import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Recipes = ({recipes}) => {
  



    console.log(recipes)


    return (
      <div>
        <h2>List of Recipes</h2>
        <ul>
            {recipes &&
              recipes.map((recipe) => (
                <Link to={`/recipes/${recipe.sys.id}`} >
                <li key={recipe.sys.id}>
                <h3>{recipe.fields.title}</h3>
                <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
                </li>
                </Link>
              ))}
          
        </ul>
      </div>
    );
  };

export default Recipes