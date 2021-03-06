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

recipesRouter.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
        res.json(recipe)
    })
})

recipesRouter.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        res.json(updated)
    })
})

recipesRouter.get('/:id', (req, res) => {
    Recipe.findById(req.params.id, (err, recipe) => {
        res.json(recipe)
    })
})

module.exports = recipesRouter