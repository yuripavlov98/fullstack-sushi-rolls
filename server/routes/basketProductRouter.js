const Router = require('express')
const router = new Router()
const basketProductController = require('../controllers/basketProductController')

router.post('/', basketProductController.create)
router.delete('/:id', basketProductController.delete)
router.get('/', basketProductController.getAll)
router.delete('/', basketProductController.clearBasket);

module.exports = router