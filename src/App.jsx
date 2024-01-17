import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Routes, Route,useParams } from "react-router-dom";
import useContentful from "./components/useContentful";
import NavBar from "./components/Navbar";
import Recipe from "./Pages/Recipe";
import HomePage from "./Pages/HomePage";



const App = () => {
  const { recipes,getRecipes } = useContentful();
  const {id} = useParams()
   

  const accessToken = "your_access_token_here";

  // Pass the access token as an argument
  const contentfulData = useContentful(accessToken);
  console.log(recipes)

  useEffect(() => {
    getRecipes();
  }, [id]);

  return (
    <div>
      <NavBar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
    </div>
  );
};

export default App;
