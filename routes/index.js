const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('index.ejs');
})

const bookRoutes = require('./book')
const userRoutes = require('./user')
// const receiptRoutes = require('./receipt')
route.use('/books', bookRoutes)
route.use('/users', userRoutes)
// route.use('/receipts', receiptRoutes)

module.exports = route;