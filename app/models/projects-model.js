module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    project_name: { type: DataTypes.STRING, allowNull: false },
    project_description: { type: DataTypes.TEXT, allowNull: false },
    project_hours: { type: DataTypes.INTEGER, allowNull: false }
  });


  return Project;
};