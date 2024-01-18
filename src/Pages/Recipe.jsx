import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'



const {id} = useParams()

const singleRecipe = recipes.find((recipe) => recipe.sys.id === id)
console.log(singleRecipe)




    



        return (
            <div>
                <h2>{singleRecipe.fields.title}</h2>
                <img src={singleRecipe.fields.image.fields.file.url} alt={singleRecipe.fields.title} />
                <p>{singleRecipe.fields.description}</p>
                <p>{singleRecipe.fields.ingredients}</p>
                <p>{singleRecipe.fields.instructions}</p>
            </div>

        )
} ;
export default Recipe
