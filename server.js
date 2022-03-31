const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const recipesRouter = require('./controllers/recipesRouter')

const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log('listening on ', PORT)
})







