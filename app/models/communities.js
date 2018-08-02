// CREATE TABLE communities
// (
//    community_id int NOT NULL AUTO_INCREMENT,
//    community_name varchar(30) NOT NULL,
//    PRIMARY KEY (community_id),
//    community_id int NOT NULL, FOREIGN KEY (project_id) REFERENCES projects(project_id),
// );

module.exports = function(sequelize, DataTypes) {
    var Communities = sequelize.define("Communities", {
        community_name: {type: DataTypes.STRING, allowNull: false},
        // project_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Projects', key: 'id'}}
    })
    Communities.associate = function(models) {

    Communities.belongsTo(models.User, {
        as: 'UserCommunity',
        foreignKey: {
          allowNull: false
        }
      });
    }
    
    return Communities
}