import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import useContentful from "./components/useContentful";
import NavBar from "./components/Navbar";
import Recipe from "./Pages/Recipe";
import HomePage from "./Pages/HomePage";
import Recipes from "./Pages/Recipes";
import Footer from './Pages/Footer';
import styles from './Pages/HomePage.module.css'; 
import cors from 'cors';


const App = () => {
const [data, setData] = useState([]);

  const fetchRecipes = async()=> {
    try {
      const res = await fetch("http://localhost:8000/recipes");
      const data = await res.json()
      setData(data)
      console.log(data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    // getRecipes();
    fetchRecipes()
  }, []);

  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes data={data} />} />
        <Route path="/recipes/:id" element={<Recipe data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
