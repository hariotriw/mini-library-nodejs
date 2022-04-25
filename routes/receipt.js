const {Router} = require('express')
const receiptRoutes = Router()
const {ReceiptController} = require('../controllers')

receiptRoutes.get("/", ReceiptController.index)
receiptRoutes.get("/createPage", ReceiptController.create)
receiptRoutes.post("/create", ReceiptController.store)
receiptRoutes.get("/show/:id", ReceiptController.show)
receiptRoutes.get("/edit/:id", ReceiptController.edit)
receiptRoutes.post("/update", ReceiptController.update)
receiptRoutes.get("/delete/:id", ReceiptController.destroy)

module.exports = receiptRoutes;
