const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    Food: { type: String, required: true},
    Ingredient: { type: String, required: true},
    Instruction: { type: String, required: true},
    Cost: { type: Number, required: true},
})

module.exports = mongoose.model('Recipe', recipeSchema)