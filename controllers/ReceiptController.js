const {Receipt, Book, User, Category, Sequelize} = require('../models')

class ReceiptController {
    
    // --- fungsi untuk merender dan menampilkan semua data receipts ---
    static async index(req, res){
        try {
            let result = await Receipt.findAll({
                include: [Book, User],
                order: [
                    ['id', 'asc']
                ],
                attributes: {
                    include: ['id']
                }
            })

            // res.json({receipts:result})
            res.render('./receipt/index.ejs', {receipts:result})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan form create ---
    static async create(req, res){
        try {
            let arrbooks = await Book.findAll({
                include: [Category],
                order: [
                    ['id', 'asc']
                ]
            })

            let arrUsers = await User.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            // res.json({});
            res.render('./receipt/create.ejs', {books: arrbooks, users: arrUsers});
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form create di back-end ---
    static async store(req, res){
        try {
            let { BookId, UserId, staff_in_charge, start_borrowing, end_borrowing, status} = req.body;
            console.log(end_borrowing);
            if(!end_borrowing){
                end_borrowing = null;
            }

            let result = await Receipt.create({
                BookId, UserId, staff_in_charge, start_borrowing, end_borrowing, status
            })

            // res.json(result)
            res.redirect('/receipts')
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan sebuah data receipt ---
    static async show(req, res){
        try {
            let id = req.params.id
            // let result = Receipt.findOne({
            //     where: {
            //         id: id
            //     }
            // })
            let result = await Receipt.findByPk(id);
            // console.log(result)

            res.json({receipt: result})
            // res.render('./receipt/show.ejs', {receipt: result})
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan halaman edit receipt ---
    static async edit(req, res){
        try {
            let id = req.params.id
            let result = await Receipt.findAll({
                where: {id:id},
                attributes: {
                    include: ['id']
                }
            });
            let arrbooks = await Book.findAll({
                include: [Category],
                order: [
                    ['id', 'asc']
                ]
            })

            let arrUsers = await User.findAll({
                order: [
                    ['id', 'asc']
                ]
            })

            // res.json({receipt: result[0]})
            res.render('./receipt/edit.ejs', {receipt: result[0], books: arrbooks, users: arrUsers})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form edit receipt di back-end ---
    static async update(req, res){
        try {
            let { id, BookId, UserId, staff_in_charge, start_borrowing, end_borrowing, status} = req.body;

            let result = await Receipt.update({
                BookId: +BookId,
                UserId: +UserId,
                staff_in_charge: staff_in_charge,
                start_borrowing: start_borrowing,
                end_borrowing: end_borrowing,
                status: status
            }, {
                where: {
                    id: +id
                }
            })

            // res.json(result)
            res.redirect('/receipts')
        } catch (err) {
            res.json(err)
        }
    }

    // --- fungsi untuk merender dan menampilkan halaman pengambilan buku ---
    static async catalogPage(req, res){
        try {
            let result = await Book.findAll({
                include: [Category],
                order: [
                    ['id', 'asc']
                ]
            })

            // res.json({books:result})
            res.render('./receipt/katalog.ejs', {books:result})
        } catch (err) {
            res.json(err)
        }
    }

    // --- fungsi untuk merender dan menampilkan halaman pengambilan buku ---
    static async borrowBookPage(req, res){
        try {
            let arrbooks = await Book.findAll({
                include: [Category],
                order: [
                    ['id', 'asc']
                ]
            })

            let arrUsers = await User.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            
            // res.json({books: arrbooks, users: arrUsers})
            res.render('./receipt/borrow.ejs', {books: arrbooks, users: arrUsers})
        } catch (err) {
            res.json(err)
        }
    }

    // --- fungsi untuk mengelola form edit pengembalian buku di back-end ---
    static async borrowBook(req, res){
        try {
            let { BookId, UserId, staff_in_charge} = req.body;
            var todayDate = new Date().toISOString();

            let result = await Receipt.create({
                BookId: +BookId,
                UserId: +UserId,
                staff_in_charge: staff_in_charge,
                start_borrowing: todayDate,
                end_borrowing: null,
                status: "dipinjam"
            })

            await Book.update({
                stock: Sequelize.literal(`stock - 1`)
            },  { 
                where: {
                id: +BookId
                }
            })

            // res.json(result)
            res.redirect('/receipts')
        } catch (err) {
            res.json(err)
        }
    }

    // --- fungsi untuk merender dan menampilkan halaman pengembalian buku ---
    static async returnBookPage(req, res){
        try {
            let arrbooks = await Book.findAll({
                include: [Category],
                order: [
                    ['id', 'asc']
                ]
            })

            let arrUsers = await User.findAll({
                order: [
                    ['id', 'asc']
                ]
            })

            res.render('./receipt/return.ejs', {books: arrbooks, users: arrUsers})
        } catch (err) {
            res.json(err)
        }
    }

    // --- fungsi untuk mengelola form edit pengembalian buku di back-end ---
    static async returnBook(req, res){
        try {
            let { BookId, UserId} = req.body;
            var todayDate = new Date().toISOString();

            let result = await Receipt.update({
                end_borrowing: todayDate,
                status: "dikembalikan"
            }, {
                where: {
                    BookId: +BookId,
                    UserId: +UserId
                }
            })

            await Book.update({
                stock: Sequelize.literal(`stock + 1`)
            },  { 
                where: {
                id: +BookId
                }
            })

            // res.json(result)
            res.redirect('/receipts')
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola delete sebuah receipt di back-end ---
    static async destroy(req, res){
        try {
            let id = req.params.id

            let result = await Receipt.destroy({
                where: {
                    id: id
                }
            })

            res.redirect('/receipts')
            
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ReceiptController;