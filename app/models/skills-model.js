// CREATE TABLE skills
// (
// 	skill_id int NOT NULL AUTO_INCREMENT,
//     skill_category varchar(30) NOT NULL,  
//     PRIMARY KEY (skill_id)
// );

module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
        skill_category: {type: DataTypes.STRING, allowNull: false}
    });
    return Skills
}