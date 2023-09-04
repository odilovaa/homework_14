const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class Category_a extends Model {}

Category_a.init(
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
        tableName: "category_a",
    }
);

module.exports = Category_a;