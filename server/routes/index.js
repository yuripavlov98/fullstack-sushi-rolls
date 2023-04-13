const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')

router.use('/type', typeRouter)
router.use('/product', productRouter)

module.exports = router