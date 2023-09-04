const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class Category_b extends Model {}

Category_b.init(
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
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        sequelize,
        tableName: "category_b",
    }
);

module.exports = Category_b;