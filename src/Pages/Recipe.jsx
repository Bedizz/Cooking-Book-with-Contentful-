import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Recipe.module.css";
import Footer from "./Footer";

const Recipe = ({ data }) => {
  const { id } = useParams();
  // const singleRecipe = data.find((recipe) => recipe.id === id);
  
  const singleRecipe = data.find((recipe) => {
    return recipe.title === id
  });


  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }
  function handleBack () {
    navigate(-1)
  }

  return (
    <>
      {singleRecipe && (
        <>
          <div className={styles.container}>
            <h2 className={styles.title}>{singleRecipe.title}</h2>
            <div className={styles["recipe-item"]}>
              <img
                className={styles["recipe-image"]}
                src={singleRecipe.image}
                alt={singleRecipe.title}
              />
              <p className={styles.description}>
                {singleRecipe.description}
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
                <div>{singleRecipe.ingredients}</div>
              
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
                {singleRecipe.instructions}
              </div>
            )}

            <div className="handleButtons">
              <button onClick={handleClick}>Back to Home</button>
              <button onClick={handleBack}>Back to Recipes</button>
            </div>
          </div>
        </>
      )}
  <Footer footerText={"With love from Turkey and Colombia"} />
    </>
  );
};

export default Recipe;
