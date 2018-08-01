// CREATE TABLE projectskills
// (
//     skill_id int FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
//     project_id int FOREIGN KEY (project_id) REFERENCES projects(project_id)
// );
module.exports = function(sequelize, DataTypes) {
    var ProjectSkills = sequelize.define("ProjectSkills", {
        skill_id: {type: DataTypes.INTEGER, references:{model:'Skills',key:'skill_id'}},
        project_id: {type: DataTypes.INTEGER, references: {model: 'Projects', key:'project_id'}}
    })
    return ProjectSkills
};