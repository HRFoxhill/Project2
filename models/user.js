module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      
      //define user with all db elements
    });
  
    Author.associate = function(models) {
      // Associating User with Posts
      // When an User is deleted, also delete any associated Posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  