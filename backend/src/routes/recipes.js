import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get ("/", async (req,res) => {
    try{
        const response = await RecipeModel.find({});
        res.json(response);

    } catch (err) {
        res.json(err);

    }
});


router.post ("/", verifyToken,  async (req,res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (err) {
        res.json(err);

    }
});

router.put("/", verifyToken, async (req, res) => {
    try{
        const recipe = await RecipeModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json ({savedRecipes: user.savedRecipes});
       }catch (err) {
        res.json(err);
       }

})

router.get("/savedRecipes/ids", async (req, res) => {
     try{
        const user = await UserModel.findById.findById(req.body.userID);
        res.json({ savedRecipes: user?.savedRecipes});
   } catch (err) {
        res.json(err)
     }
    });

    router.get("/savedRecipes", async (req, res ) => {
        try {
        const user = await UserModel.findById(req.bodyuserID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes},
        });
        res.json({savedRecipes});
    } catch (err) {
        res.json(err);
    }
    }); 

    router.delete("/:id", async (req, res) => {
        const result = await RecipeModel.findByIdAndDelete(req.params.id);
        res.json(result);
      });



export { router as recipesRouter};

