// DEPENDENCIES
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')

require('dotenv').config()

const recipesRouter = require('./controllers/recipesRouter')

const PORT = process.env.PORT
const DATABASE = process.env.DATABASE_URL

// MongoDB Configs
mongoose.connect(DATABASE)
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

// MiddleWare
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/recipes', recipesRouter)


app.listen(PORT, () => {
    console.log('listening on ', PORT)
})







