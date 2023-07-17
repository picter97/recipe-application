import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipe();

  }, [userID]);

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3001/recipe${recipeId}`);
      
      const updatedRecipes = savedRecipes.filter(
        (recipe) => recipe._id !== recipeId
      );
      setSavedRecipes(updatedRecipes);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
            <button onClick={() => handleDeleteRecipe(recipe._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};