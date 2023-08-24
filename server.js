const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT

app.use(morgan("dev"))

app.get('/', (req,res)=>{
    res.send("Landing Page")
})

app.listen(PORT , ()=>{
    console.log(`Connected at http://localhost:${PORT}/`)
})