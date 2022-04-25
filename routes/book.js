const {Router} = require('express')
const bookRoutes = Router()
const {BookController} = require('../controllers')

bookRoutes.get("/", BookController.index)
bookRoutes.get("/createPage", BookController.create)
bookRoutes.post("/create", BookController.store)
bookRoutes.get("/show/:id", BookController.show)
bookRoutes.get("/edit/:id", BookController.edit)
bookRoutes.post("/update", BookController.update)
bookRoutes.get("/delete/:id", BookController.destroy)

module.exports = bookRoutes;
