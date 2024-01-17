import React from 'react'



const Recipes = ({recipes}) => {


    console.log(recipes)
    return (
      <div>
        <h2>List of Recipes</h2>
        <ul>
            {recipes &&
              recipes.map((recipe) => (
                <li key={recipe.sys.id}>
                <h3>{recipe.fields.title}</h3>
                <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
                </li>
            ))}
          
        </ul>
      </div>
    );
  };

export default Recipes