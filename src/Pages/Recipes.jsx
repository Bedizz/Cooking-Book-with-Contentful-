import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import "./Recipes.css"
import SearchBar from '../components/SearchBar';

const Recipes = ({data}) => {

  

    return (
      <div className='recipe-container'>
        <h2>List of Recipes</h2>
        <SearchBar />
        
          <ul className='recipes-list'>
              {data &&
                data.map((recipe) => (
                  <li className="recipe-item" key={recipe.id} >
                    <Link to={`/recipes/${recipe.title}`} >
                  <div className='header-container'>
                    <h3>{recipe.title}</h3>
                  </div>
                  <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                  </Link>
                  </li>
                ))}
          </ul>
          <Footer footerText={"With love from Turkey and Colombia"}/>
      </div>
    );
  };

export default Recipes