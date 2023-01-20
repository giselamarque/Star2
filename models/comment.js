const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
//
class Comment extends Model {}


Comment.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'login',
                key: 'id'
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;