const sequelize = require('../db')
const {DataTypes} =  require('sequelize')

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    // rating: {type: DataTypes.INTEGER, defaultValue: 0},
}) 

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
}) 

Type.hasMany(Product)
Product.belongsTo(Type)

module.exports = {
    Product,
    Type
}