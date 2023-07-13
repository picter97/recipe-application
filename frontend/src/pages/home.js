import React, {useEffect, useState} from "react";
import {useGetUserID} from '../hooks/useGetUserID';
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  
  const userID = useGetUserID();

  useEffect (() => {
    const fetchRecipes = async () => {
      try {
        const response =  await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response =  await axios.get( `http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
        setSavedRecipes(response.data.savedRecipes);
      } catch (err){
        console.error(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  },[userID]);

  const saveRecipe = async(recipeID) => {
  try {
    const response =  await axios.put("http://localhost:3001/recipes", {recipeID,userID}
    );
    setSavedRecipes(response.data.savedRecipes);
  } catch (err){
    console.error(err);
  }
};

const handleDelete = async (recipeID) => {
  try {
    // Use axios.delete instead of fetch with DELETE method
    await axios.delete(
      `http://localhost:3001/recipes/${recipeID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Rest of your code handling the deletedRecipe
   
  } catch (error) {
    // Handle any error that occurs during the request
    console.error(error);
  }
};

const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h2> Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button onClickCapture = {() => saveRecipe(recipe._id)}  disabled={isRecipeSaved(recipe._id)}>
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"} </button>
                <button onClick={() => handleDelete(recipe._id)}>
                  {(recipe._id) ? "Delete" : "Delete"}  
            </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name}/>
            <p>Cooking Time:  (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

