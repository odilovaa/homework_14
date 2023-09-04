const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class Book extends Model {}

Book.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title:
        {
            type: DataTypes.STRING(52),
            allowNull: false,
        },

        pages:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        year:
        {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        price:
        {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        country:
        {
            type: DataTypes.STRING(22),
            allowNull: false,
        },

        description:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        photo:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        sequelize,
        tableName: "book",
    }
);

module.exports = Book;