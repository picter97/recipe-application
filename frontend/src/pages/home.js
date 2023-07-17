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

const handleDelete = async (recipeId) => {
  try {
    await axios.delete(`http://localhost:3001/recipes/${recipeId}`);
      
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe._id !== recipeId
    );
    setSavedRecipes(updatedRecipes);
    window.location.reload(); // Refresh the page
  } catch (err) {
    console.error(err);
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
                <button onClick={() => 
                  handleDelete(recipe._id)}>
                  {(recipe._id) ? "Delete" : "Delete"}  
            </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name}/>
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

