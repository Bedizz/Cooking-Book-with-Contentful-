import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './components/useContentful'
import { NavLink,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App =( ) =>  {
  
  const [recipes, setRecipes] = useState([])
  const { getRecipes } = useContentful();

  useEffect(() => {
      getRecipes().then((response) => setRecipes(response))
      console.log(recipes)

      
},[])
  

  return (
    <>
    <div className='cooking-book'>
      <Navbar/>
      {/* <nav>
        <NavLink to="/" >HomePage</NavLink>
        <NavLink to="/recipes" >Recipes</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<useContentful />} />
        <Route path="/recipes" element={<Recipe  />} />
      </Routes> */}
    </div>
    </>
  )
}

export default App
