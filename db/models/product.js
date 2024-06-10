module.exports= function(sequelize, dataTypes){
    let alias='Product';

    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type:dataTypes.STRING,
            allowNull:true

        },
        name:{
            type:dataTypes.STRING,
            allowNull:false
        },
        description: {
            type:dataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deleted_at:{
            type:dataTypes.DATE,
            allowNull:false
        }
    }
};


let config = {
    tableName: "productos",
    timestamps: true, 
    underscored: true, 
};

const Product = sequelize.define(alias, cols, config);

Product.associate = function (models) {
    Product.belongsTo(models.User, {
        as: "user", 
        foreignKey: "usuario_id",
    }),
       
    Product.hasMany(models.Comment, {
        as: "comment", 
        foreignKey: "product_id",
    })
};

return Product;

