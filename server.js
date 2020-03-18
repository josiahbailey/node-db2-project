const express = require('express')

const carRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h1>Car Dealer API</h1>`)
})

server.use('/api/cars', carRouter)

module.exports = server