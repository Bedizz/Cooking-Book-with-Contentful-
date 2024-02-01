import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Recipe.module.css";
import Footer from "./Footer";

const Recipe = ({ recipes }) => {
  const { id } = useParams();
  const singleRecipe = recipes.find((recipe) => recipe.sys.id === id); // sys es un objeto que contiene el id de cada receta se obtiene de contentful
  // recipe.sys es un objeto que contiene el id de cada receta se obtiene de contentful. Al concatenar 

  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }
  function handleBack () {
    navigate(-1)
  }

 if (!singleRecipe) {
    return <div>Loading...</div>
  } 

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{singleRecipe.fields.title}</h2>
        <div className={styles["recipe-item"]}>
          <img
            className={styles["recipe-image"]}
            src={singleRecipe.fields.image.fields.file.url}
            alt={singleRecipe.fields.title}
          />
          <p className={styles.description}>
            {singleRecipe.fields.description}
          </p>
        </div>
      </div>

      <div className="contentContainer">
        <div
          className={styles.toggle}
          onClick={() => setShowIngredients(!showIngredients)}
        >
          Ingredients
        </div>
        {showIngredients && (
          <div className={styles.ingredients}>
            {singleRecipe.fields.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </div>
        )}
        <div
          className={styles.toggle}
          onClick={() => setShowInstructions(!showInstructions)}
        >
          Procedure
        </div>
        {showInstructions && (
          <div className={styles.instructions}>
            {singleRecipe.fields.instructions}
          </div>
        )}

        <div className="handleButtons">
          <button onClick={handleClick}>Back to Home</button>
          <button onClick={handleBack}>Back to Recipes</button>
        </div>
      </div>

      <Footer footerText={"With love from Turkey and Colombia"} />
    </>
  );
};

export default Recipe;
