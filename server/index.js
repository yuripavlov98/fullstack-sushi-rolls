require('dotenv').config()

const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static'))) // сохранение картинок в 'указанную папку'
app.use(fileUpload({})) // картинки
app.use('/api', router)

app.use(errorHandler) // обработка ошибок, ставим последним


// запускаю сервер
const start = async () => {
    try {
        await sequelize.authenticate() // аутентификация
        await sequelize.sync() // сверяет бд со схемой данных
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()