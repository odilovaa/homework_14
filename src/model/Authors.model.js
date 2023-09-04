const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class Author extends Model {}

Author.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name:
        {
            type: DataTypes.STRING(22),
            allowNull: false,
        },

        last_name:
        {
            type: DataTypes.STRING(22),
            allowNull: false,
        },

        date_birth:
        {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        date_death:
        {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        country:
        {
            type: DataTypes.STRING(22),
            allowNull: false,
        },

        bio:
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
        tableName: "author",
    }
);

module.exports = Author;