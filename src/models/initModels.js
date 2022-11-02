const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')
const Users = require('./users.models')

const initModels = () => {

    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}


module.exports = initModels