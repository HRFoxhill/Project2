// CREATE TABLE communities
// (
//    community_id int NOT NULL AUTO_INCREMENT,
//    community_name varchar(30) NOT NULL,
//    PRIMARY KEY (community_id),
//    community_id int NOT NULL, FOREIGN KEY (project_id) REFERENCES projects(project_id),
// );

module.exports = function(sequelize, DataTypes) {
    var Communities = sequelize.define("Communities", {
        community_id: {type: DataTypes.INTEGER, allowNull:false,autoIncrement:true, primarykey: true},
        community_name: {type: DataTypes.STRING, allowNull: false},
        project_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Projects', key: 'project_id'}}
    })
    return Communities
}