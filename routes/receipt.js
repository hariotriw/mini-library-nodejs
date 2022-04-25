const {Router} = require('express')
const receiptRoutes = Router()
const {ReceiptController} = require('../controllers')

// ----- Manajement Receipt -----
receiptRoutes.get("/", ReceiptController.index)
receiptRoutes.get("/createPage", ReceiptController.create)
receiptRoutes.post("/create", ReceiptController.store)
// receiptRoutes.get("/show/:id", ReceiptController.show)
receiptRoutes.get("/edit/:id", ReceiptController.edit)
receiptRoutes.post("/update", ReceiptController.update)
receiptRoutes.get("/delete/:id", ReceiptController.destroy)

// ----- Library apps -----
receiptRoutes.get("/borrow/page", ReceiptController.borrowBookPage)
receiptRoutes.post("/borrow/new", ReceiptController.borrowBook)
receiptRoutes.get("/return/page", ReceiptController.returnBookPage)
receiptRoutes.post("/return/new", ReceiptController.returnBook)

module.exports = receiptRoutes;
