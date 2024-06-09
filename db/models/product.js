module.exports= function(sequelize, dataTypes){
    let alias='product';

    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        userId:{
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
    timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
};

const Product = sequelize.define(alias, cols, config);

Product.associate = function (models) {
    Product.belongsTo(models.User, {
        as: "user", //Como voy a llamar a la relación dentro del controlador
        foreignKey: "usuario_id",
    }),
       
    Product.hasMany(models.Comment, {
        as: "comment", //Como voy a llamar a la relación dentro del controlador
        foreignKey: "product_id",
    })
};

return Product;

