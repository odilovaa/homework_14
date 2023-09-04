const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class About_me extends Model {}

About_me.init(
    {
        full_name:
        {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        birth_date:
        {
            type: DataTypes.STRING(22),
            allowNull: false,
        },

        City:
        {
            type: DataTypes.STRING(32),
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
        books_count:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        sequelize,
        tableName: "about_me",
    }
);

module.exports = About_me;