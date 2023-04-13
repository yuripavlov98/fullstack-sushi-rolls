const uuid = require('uuid') // генерация id
const path = require('path') // путь к изображению
const {Product} = require('../models/models') // ProductInfo
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, weight, typeId, info} = req.body 
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" // генерация id
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //путь до текущей папки, вернуться на директорию выше, папка
            const product = await Product.create({name, price, weight, typeId, img: fileName})

            // массив характеристик
            // if (info) {
            //     info = JSON.parse(info)
            //     info.forEach(i => {
            //         ProductInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             productId: product.id
            //         })
            //     })
            // }
    
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {typeId} = req.query // фильтрация по квери параметрам; // limit, page
        // page = page || 1
        // limit = limit || 9
        // let offset = page * limit - limit
        let products;
        if (!typeId) {
            products = await Product.findAndCountAll() // {limit, offset}
        }
        if (typeId) {
            products = await Product.findAndCountAll({where: {typeId}}) // , limit, offset
        }
        return res.json(products)
    }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const product = await Product.findOne(
    //         {
    //             where: {id},
    //             include: [{model: ProductInfo, as: 'info'}]
    //         },

    //     )
    //     return res.json(product)
    // }
}

module.exports = new ProductController()