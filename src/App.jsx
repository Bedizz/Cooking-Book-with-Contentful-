import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import useContentful from "./components/useContentful";
import NavBar from "./components/Navbar";
import Recipe from "./Pages/Recipe";
import HomePage from "./Pages/HomePage";
import Recipes from "./Pages/Recipes";


const App = () => {
  const { recipes, getRecipes } = useContentful();
  const { id } = useParams();

  

 
  console.log(recipes);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
