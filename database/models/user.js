module.exports = function(sequelize, dataTypes) {
    let alias = 'User' ;

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type:dataTypes.STRING,
            allowNull:false
        },
        contraseña: {
            type:dataTypes.STRING,
            allowNull:false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        foto: {
            type:dataTypes.STRING,
            allowNull:true
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        deleted_at:{
            type:dataTypes.DATE,
            allowNull:true
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,        
        underscored: true,       
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "product", 
            foreignKey: "product_id",
        });
        User.hasMany(models.Comment, {
            as: "comment", 
            foreignKey: "product_id",
        });
    
    }
    return User;

}
