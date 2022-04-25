const {Router} = require('express')
const userRoutes = Router()
const {UserController} = require('../controllers')

userRoutes.get("/", UserController.index)
userRoutes.get("/createPage", UserController.create)
userRoutes.post("/create", UserController.store)
userRoutes.get("/show/:id", UserController.show)
userRoutes.get("/edit/:id", UserController.edit)
userRoutes.post("/update", UserController.update)
userRoutes.get("/delete/:id", UserController.destroy)

module.exports = userRoutes;
