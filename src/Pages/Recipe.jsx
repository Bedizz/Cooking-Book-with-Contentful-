import React, {useState} from 'react'
import { createClient } from "contentful";
import NavBar from '../components/Navbar'
import { useParams } from 'react-router-dom'

const Recipe = ({ recipes }) => {
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

export default Recipe

/* const Recipe = (props) => {

const {id} = useParams()
    

return (
    <>
    
    <div className='recipe-card-container'>
        <div className='recipe-card'>
            <div className='title-container'>
                <h1>Juicy Roasted Chicken</h1>
                <button lassName='PN-buttons'>Previous</button><button className='PN-buttons'>Next</button>
                <p>{id}</p>
            </div>
            
            <div className='img-container'>
                <img src="public\Recipe Images\juicy-roast-chicken.jpg" alt='recipe' />
                <div className='ing-container'>
                <h1>Ingredients</h1>
                <ul>
                    <li>1 whole chicken</li>
                    <li>1/2 cup butter</li>
                    <li>salt</li>
                    <li>pepper</li>
                    <li>garlic powder</li>
                    <li>onion powder</li>
                    <li>1 lemon</li>
                    <li>1 onion</li>
                    <li>1/2 cup chicken broth</li>
                </ul>
                </div>
            </div>
            <hr />
            <div className='fast-info'>
                <p><strong>Prep Time:</strong> 10 minutes</p>
                <p><strong>Cook Time:</strong> 1 hour</p>
                <p><strong>Serves:</strong> 4</p>
            
            </div>
            
            <div className='description'>
                <h4>Description</h4>
                <p>Preheat the oven to 350 degrees F (175 degrees C).
                    Place chicken in a roasting pan; season generously inside and out with onion powder, salt, and pepper. Place 3 tablespoons of butter in chicken cavity; arrange dollops of remaining butter on the outside of chicken. Cut celery into 3 or 4 pieces; place in the chicken cavity. Bake chicken uncovered in the preheated oven until no longer pink at the bone and the juices run clear, about 1 hour and 15 minutes. An instant-read thermometer inserted into the thickest part of the thigh, near the bone, should read 165 degrees F (74 degrees C). Remove from the oven and baste with drippings. Cover with aluminum foil and allow to rest for about 30 minutes before serving.</p>

            </div>
        </div> 

    </div>
    </>
)
}
 */