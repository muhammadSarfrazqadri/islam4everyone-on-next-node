const express = require('express')
const connectDB = require('./config/database')


const app = express()


app.use('/', (req, res) => {
    res.send("This is / route")
})

connectDB().then(() => {
    console.log("Database connected, starting server...")

    app.listen(3001, () => {
        console.log("Server is running on port 3001")
    })
    
})
.catch((err) => {
    console.error("Database connection failed:", err)
    process.exit(1)
})


module.exports = app;