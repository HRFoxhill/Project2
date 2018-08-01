// CREATE TABLE userskills
// (
//     skill_id int FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
//     user_id int FOREIGN KEY (user_id) REFERENCES users(user_id)
// );

module.exports = function(sequelize, DataTypes) {
    var UserSkills = sequelize.define("UserSkills", {
        skill_id: {type: DataTypes.INTEGER, references: {model: skills, key: skill_id}},
        user_id: {type: DataTypes.STRING, references: {model: users, key: user_id}}
    });
    return UserSkills
}