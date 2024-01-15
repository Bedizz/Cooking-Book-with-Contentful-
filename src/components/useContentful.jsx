import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "t5tajbphcq3f",
    accessToken: "grVsAtXgxfiTIbYGD6uWZhMQ-e0j3acf0eQZOx0hQNM",
    host: "cdn.contentful.com"
  });

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipe",
        select: "fields",
      });
      
      const sanitizedEntries = entries.items.map((item) => {
        const { title, description, image } = item.fields;
        // const  title = item.fields.title;
        // const description = item.fields.description;
        // const image = item.fields.image.fields.file.url;
        return { title, description, image };
      });
      return sanitizedEntries;

    } catch (error) {
      console.log("error fetching recipe", error);
    }
};

  return { getRecipes };
};

export default useContentful;
