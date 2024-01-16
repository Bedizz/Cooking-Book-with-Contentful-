import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './components/useContentful'
import NavBar from './components/Navbar'

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
      </div>
    </>
  )
}

export default App
