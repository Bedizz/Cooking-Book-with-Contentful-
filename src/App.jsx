import { useState, useEffect } from 'react'
import './App.css'

import useContentful from './components/useContentful'

const App =( ) =>  {
  
  const [recipes, setRecipes] = useState([])
  const { getRecipes } = useContentful();

  useEffect(() => {
      getRecipes().then((response) => console.log(response))
})
  

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
