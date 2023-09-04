const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:1227@localhost:1227/book_info")

module.exports = sequelize;