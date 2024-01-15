import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './components/useContentful'
import RecipeContainer from './components/RecipeContainer'

const App =( ) =>  {
  
  const [recipes, setRecipes] = useState([])
  const { getRecipes } = useContentful();

  useEffect(() => {
      getRecipes().then((response) => setRecipes(response))
      console.log(recipes)

      
},[])
  

  return (
    <>
      <div>
          <RecipeContainer recipes={recipes}  />
      </div>
    </>
  )
}

export default App
