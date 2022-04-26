const {Book} = require('../models')

class BookController {
    
    // --- fungsi untuk merender dan menampilkan semua data books ---
    static async index(req, res){
        try {
            let result = await Book.findAll({
                order: [
                    ['id', 'asc']
                ]
            })

            // res.json({books:result})
            res.render('./book/index.ejs', {books:result})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan form create ---
    static create(req, res){
        try {

            // res.json({});
            res.render('./book/create.ejs');
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form create di back-end ---
    static async store(req, res){
        try {
            let { title, alt_title, author, publisher, category, bookshelf_code, stock} = req.body;

            let result = await Book.create({
                title, alt_title, author, publisher, category, bookshelf_code, stock
            })

            res.redirect('/books')
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan sebuah data book ---
    static async show(req, res){
        try {
            let id = req.params.id
            // let result = Book.findOne({
            //     where: {
            //         id: id
            //     }
            // })
            let result = await Book.findByPk(id);
            // console.log(result)

            // res.json({book: result})
            res.render('./book/show.ejs', {book: result})
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan halaman edit book ---
    static async edit(req, res){
        try {
            let id = req.params.id
            let result = await Book.findByPk(id);

            // res.json({book: result})
            res.render('./book/edit.ejs', {book: result})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form edit book di back-end ---
    static async update(req, res){
        try {
            let { id, title, alt_title, author, publisher, category, bookshelf_code, stock} = req.body;

            let result = await Book.update({
                title: title,
                alt_title: alt_title,
                author: author,
                publisher: publisher,
                category: +category,
                bookshelf_code: bookshelf_code,
                stock: +stock
            }, {
                where: {
                    id: +id
                }
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola delete sebuah book di back-end ---
    static async destroy(req, res){
        try {
            let id = req.params.id

            let result = await Book.destroy({
                where: {
                    id: id
                }
            })

            res.redirect('/books')
            
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = BookController;