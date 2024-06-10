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
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,        
        underscored: true,       
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    }

    return Comment;
}
