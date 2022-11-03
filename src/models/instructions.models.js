const { DataTypes, Model } = require('sequelize')
const Recipes = require('./recipes.models')

const db = require('../utils/database')

const Instructions = db.define('intructions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    step: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            Model: Recipes
        }
    }
})


module.exports = Instructions