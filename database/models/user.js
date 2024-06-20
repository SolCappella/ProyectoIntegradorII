module.exports = (sequelize, dataTypes) => {
    let alias = 'User';

  let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE
        },

        dni: {
            type: dataTypes.INTEGER
        } ,

        foto: {
           type: dataTypes.STRING,
        },

        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    };

    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true,       
    };

    let User = sequelize.define(alias, cols, config);
   User.associate = function(models) {

        User.hasMany( models.Product , {
          as: "product", 
          foreignKey: "usuario_id", 
          timestamps: "false",
          underscored: "true"
        })

        User.hasMany(models.Comment, {
        as: "comment", 
          foreignKey: "usuario_id",
          timestamps: "false",
          underscored: "true"
        })
    }

    return User;
};

