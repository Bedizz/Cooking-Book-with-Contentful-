import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'

const Recipe = ({recipes}) => {

const {id} = useParams()

const singleRecipe = recipes.find((recipe) => recipe.sys.id === id)
console.log(singleRecipe)

return (
    <div className={styles.container}>
      <h2 className={styles.title}>{singleRecipe.fields.title}</h2>
      <div className={styles['recipe-item']}>
        <img className={styles['recipe-image']} src={singleRecipe.fields.image.fields.file.url} alt={singleRecipe.fields.title} />
      </div>
      <p className={styles.description}>{singleRecipe.fields.description}</p>
      <p className={styles.ingredients}>{singleRecipe.fields.ingredients}</p>
      <p className={styles.instructions}>{singleRecipe.fields.instructions}</p>
    </div>
  )
} ;
export default Recipe