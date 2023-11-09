const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://raphaelattfield:Password1@scluster0.3umc0ij.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Conneecteed to mongodb"))
    .catch(error => console.log("couldnt connect to mongodb", error));

const recipeSchema = new mongoose.Schema({
    name: String,
    description:String,
    ingredients: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);


const createRecipe = async() => {
    const recipe = new Recipe({
        name: "Banana Bread",
        description: "so yuummy",
        ingredients: ["banana", "flour", "sugar"],
    });
    const result = await recipe.save();
    console.log(result);
};
createRecipe();