const {User} = require('../models')

class UserController {
    
    // --- fungsi untuk merender dan menampilkan semua data users ---
    static async index(req, res){
        try {
            let result = await User.findAll({
                order: [
                    ['id', 'asc']
                ]
            })

            // res.json({users:result})
            res.render('./user/index.ejs', {users:result})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan form create ---
    static create(req, res){
        try {

            // res.json({});
            res.render('./user/create.ejs');
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form create di back-end ---
    static async store(req, res){
        try {
            let { fullname, id_card, type_card} = req.body;

            let result = await User.create({
                fullname, id_card, type_card
            })

            // res.json(result)
            res.redirect('/users')
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan sebuah data user ---
    static async show(req, res){
        try {
            let id = req.params.id
            // let result = User.findOne({
            //     where: {
            //         id: id
            //     }
            // })
            let result = await User.findByPk(id);
            // console.log(result)

            res.json({user: result})
            // res.render('./user/show.ejs', {user: result})
            
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk merender dan menampilkan halaman edit user ---
    static async edit(req, res){
        try {
            let id = req.params.id
            let result = await User.findByPk(id);

            // res.json({user: result})
            res.render('./user/edit.ejs', {user: result})
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola form edit user di back-end ---
    static async update(req, res){
        try {
            let { id, fullname, id_card, type_card} = req.body;

            let result = await User.update({
                fullname: fullname,
                id_card: id_card,
                type_card: type_card
            }, {
                where: {
                    id: +id
                }
            })

            res.redirect('/users')
        } catch (err) {
            res.json(err)
        }
    }
    
    // --- fungsi untuk mengelola delete sebuah user di back-end ---
    static async destroy(req, res){
        try {
            let id = req.params.id

            let result = await User.destroy({
                where: {
                    id: id
                }
            })

            res.redirect('/users')
            
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = UserController;