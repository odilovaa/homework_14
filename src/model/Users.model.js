const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../database");

class User extends Model {}

User.init(
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

        phone_number:
        {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        email:
        {
            type: DataTypes.STRING(52),
            allowNull: false,
        },

        password:
        {
            type: DataTypes.STRING(16),
            allowNull: false,
        },

        photo:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status:
        {
            type: DataTypes.STRING(16),
            allowNull: true,
            defaultValue: 'pablicUser'
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        sequelize,
        tableName: "user",
    }
);

module.exports = User;