import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Routes, Route,useParams } from "react-router-dom";
import useContentful from "./components/useContentful";
import NavBar from "./components/Navbar";
import Recipe from "./Pages/Recipe";
import HomePage from "./Pages/HomePage";



const App = () => {
  const { recipes, getRecipes } = useContentful();
  console.log(recipes)

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <NavBar />
    <Routes>
      <Route path="/" element={ recipes.length > 0 ? <HomePage recipes={recipes} /> : <p>Loading...</p>} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
    </div>
  );
};

export default App;
