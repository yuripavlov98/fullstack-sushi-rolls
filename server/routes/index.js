const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const basketProductRouter = require('./basketProductRouter')
const ordersRouter = require('./ordersRouter')

router.use('/type', typeRouter)
router.use('/product', productRouter)
router.use('/basket_product', basketProductRouter)
router.use('/orders', ordersRouter)


module.exports = router