// CREATE TABLE skills
// (
// 	skill_id int NOT NULL AUTO_INCREMENT,
//     skill_category varchar(30) NOT NULL,  
//     PRIMARY KEY (skill_id)
// );

module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
        catskinner: {type: DataTypes.BOOLEAN, allowNull:false},
        drinker: {type: DataTypes.BOOLEAN, allowNull:false},
        lightcaresser: {type: DataTypes.BOOLEAN, allowNull:false},
        painter: {type: DataTypes.BOOLEAN, allowNull:false},
        catpetter: {type: DataTypes.BOOLEAN, allowNull:false},
        dogpetter: {type: DataTypes.BOOLEAN, allowNull:false}
    });
    return Skills
}