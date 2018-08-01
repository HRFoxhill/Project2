module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      user_id:{type: DataTypes.STRING,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false                
    },
      user_name: {type: DataTypes.STRING, allowNull: false},
      user_email: {type: DataTypes.STRING,allowNull: false},
      user_password: {type: DataTypes.STRING,allowNull:false},
      user_hours: DataTypes.INTEGER,
      community_id:{ 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        foreignkey: true
        }
    });
  
    User.associate = function(models) {
      // Associating User with Tasks
      // When an User is deleted, also delete any associated Tasks
      User.hasMany(models.User, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
