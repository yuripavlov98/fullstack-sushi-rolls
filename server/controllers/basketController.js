const {Basket} = require('../models/models')

class BasketController {
    async create(req, res) {
        const {name} = req.body 
        const basket = await Basket.create()
        return res.json(basket)
    }
    async delete(req, res) {
        const {name} = req.body 
        const basket = await Basket.delete()
        return res.json(basket)
    }
    async getAll(req, res) {
        const basket = await Basket.findAll()
        return res.json(basket)
    }
}

module.exports = new BasketController()