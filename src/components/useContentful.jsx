import { createClient } from "contentful";
import { useState } from "react";

const useContentful = () => { 
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: import.meta.env.VITE_REACT_CONTENTFUL_SPACE, 
    accessToken:  import.meta.env.VITE_REACT_CONTENTFUL_ACCESSTOKEN, 
    host: "cdn.contentful.com"
  });
 const [isLoading, setIsLoading] = useState(true);

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({ 
        content_type: "recipe",
        select: "fields",
      }); 
      setIsLoading(false);
      setRecipes(entries.items);
      // console.log(entries);
    
    } catch (error) {
      console.log("error fetching recipe", error);
      
    }
};

  return { getRecipes, recipes } //
  ;
};

export default useContentful;
