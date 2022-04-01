const Recipe = require('../models/recipeModel')
const express = require('express')

const recipesRouter = express.Router()

recipesRouter.get('/', (req, res) => {
    Recipe.find({}, (err, allRecipes) => {
        res.json(allRecipes)
    })
})

recipesRouter.post('/', (req, res) => {
    Recipe.create(req.body, (err, recipe) => {
        console.log(req.body)
        res.json(recipe)
    })
})

module.exports = recipesRouter