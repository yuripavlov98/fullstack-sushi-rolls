const { v4: uuidv4 } = require('uuid');
const {BasketProduct} = require('../models/models')

class BasketProductController {
    async create(req, res) {
        const {id, name, price, weight, img} = req.body;
        // const id = uuidv4(); // генерируем новый uuid
        const basket = await BasketProduct.create({ id, name, price, weight, img }); // сохраняем объект с новым id
        return res.json(basket)
    }
    async delete(req, res) {
        const { id } = req.params;
        const basket = await BasketProduct.destroy({ where: { id } });
        return res.json(basket);
    }
    async clearBasket(req, res) {
        await BasketProduct.destroy({
            where: {},
            truncate: true
        });
    }
    async getAll(req, res) {
        const basket = await BasketProduct.findAll()
        return res.json(basket)
    }
}

module.exports = new BasketProductController()