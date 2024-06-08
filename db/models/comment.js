module.exports = function (sequelize, dataTypes) {
    let alias = 'Comment'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        text: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,        
        underscored: false,       
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        });
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId'
        });
    }

    return Comment;
}
