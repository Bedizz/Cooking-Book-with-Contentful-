import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './components/useContentful'
import RecipeContainer from './components/RecipeContainer'
import NavBar from './components/NavBar'

const App =( ) =>  {
  
  const [recipes, setRecipes] = useState([])
  const { getRecipes } = useContentful();

  const accessToken = 'your_access_token_here';

  // Pass the access token as an argument
  const contentfulData = useContentful(accessToken);


  useEffect(() => {
      getRecipes().then((response) => setRecipes(response))
      console.log(recipes)

      
},[])
  

  return (
    <>
      <div>
      <NavBar />
      </div>
      <div>
          <RecipeContainer recipes={recipes}  />
      </div>
    </>
  )
}

export default App
