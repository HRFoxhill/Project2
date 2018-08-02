// CREATE TABLE projectskills
// (
//     skill_id int FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
//     project_id int FOREIGN KEY (project_id) REFERENCES projects(project_id)
// );
module.exports = function(sequelize, DataTypes) {
    var ProjectSkills = sequelize.define("ProjectSkills", {
        // skill_id: {type: DataTypes.INTEGER, references:{model:'Skills',key:'id'}},
        // project_id: {type: DataTypes.INTEGER, references: {model: 'Projects', key:'id'}}
    });
    ProjectSkills.associate = function(models) {
    ProjectSkills.belongsTo(models.Project, {
        as: 'Project',
        foreignKey: {
          allowNull: false
        }
      });
      ProjectSkills.belongsTo(models.Skills, {
        as: 'RequiredSkills',
        foreignKey: {
          allowNull: false
        }
      });
    };
    return ProjectSkills
};
