module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING

      user_name: {type: DataTypes.STRING, allowNull: false, unique: true},
      user_email: {type: DataTypes.STRING,allowNull: false, unique: true},
      user_password: {type: DataTypes.STRING,allowNull:false},
      user_hours: DataTypes.INTEGER,
    });
    User.associate = function(models) {
      // Associating User with Tasks
      // When an User is deleted, also delete any associated Tasks
      User.hasMany(models.Project, {
        onDelete: "cascade"
      });
    };
    
    return User;
  };