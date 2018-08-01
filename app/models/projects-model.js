module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true
      },
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_description: { type: DataTypes.TEXT, allowNull: false },
      project_hours: { type: DataTypes.INTEGER, allowNull: false },
      project_status: DataTypes.STRING,
      askeduser_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Users', key: 'user_id'}  },
      taskeduser_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Users', key: 'user_id'} },
    });
  
    Project.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Project.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Project;
  };