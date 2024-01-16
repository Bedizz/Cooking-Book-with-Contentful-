import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import useContentful from "./components/useContentful";
import NavBar from "./components/Navbar";
import Recipe from "./Pages/Recipe";
import HomePage from "./Pages/HomePage";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  const accessToken = "your_access_token_here";

  // Pass the access token as an argument
  const contentfulData = useContentful(accessToken);

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
};

export default App;
