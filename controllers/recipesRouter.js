const Recipe = require('../models/recipeModel')
const express = require('express')

const recipesRouter = express.Router()

recipesRouter.get('/', (req, res) => {
    Recipe.find({}, (err, allRecipes) => {
        res.json(allRecipes)
    })
})

module.exports = recipesRouter