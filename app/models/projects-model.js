module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_description: { type: DataTypes.TEXT, allowNull: false },
    project_hours: { type: DataTypes.INTEGER, allowNull: false },
    project_status: DataTypes.STRING,
    // askeduser_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Users', key: 'id' } },
    // taskeduser_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Users', key: 'id'} },
  });

  // Project.associate = function (models) {

  //   Project.belongsTo(models.User, {
  //     as: 'askedUser',
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   Project.belongsTo(models.User, {
  //     as: 'taskedUser',

  //     foreignKey: {
  //       allowNull: true
  //     }

  //   });
  // };

  return Project;
};