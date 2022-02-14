const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
dotenv.config()

app.get("/getUserData", ((req, res => {

})))

app.get("/getUserTransactions", ((req, res) => {

}))

app.post("/addTransaction", ((req, res) => {

}))

app.post("/addUser", ((req, res) => {

}))

const PORT = 9000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))