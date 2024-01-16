import { createClient } from "contentful";
import { useState } from "react";

const useContentful = () => { 
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "t5tajbphcq3f", 
    accessToken:  "grVsAtXgxfiTIbYGD6uWZhMQ-e0j3acf0eQZOx0hQNM", 
    host: "cdn.contentful.com"
  });
 

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipe",
        select: "fields",
      }); 
      setRecipes(entries);
      console.log(entries);
    
    } catch (error) {
      console.log("error fetching recipe", error);
    }
};

  return { getRecipes };
};

export default useContentful;
