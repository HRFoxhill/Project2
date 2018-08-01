CREATE DATABASE karma_db;

USE karma_db;

CREATE TABLE users

(
	user_id int NOT NULL AUTO_INCREMENT,
	user_name varchar(30) NOT NULL,
    user_email varchar(30) NOT NULL,
    user_password varchar(30) NOT NULL,
    user_hours int,
	PRIMARY KEY (id),
    community_id int NOT NULL, FOREIGN KEY (community_id) REFERENCES community(community_id) 
);
-- junction table

CREATE TABLE projects
(
    project_id int NOT NULL AUTO_INCREMENT,
    project_name varchar(30) NOT NULL,
    project_description TEXT NOT NULL,
    project_hours int NOT NULL,
    project_status int,
 --   user_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES user(user_id),
      askeduser_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES user(user_id),
      taskeduser_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES user(user_id),
      PRIMARY KEY (project_id)
);

CREATE TABLE skills
(
	skill_id int NOT NULL AUTO_INCREMENT,
    skill_category varchar(30) NOT NULL,  
    PRIMARY KEY (skill_id)
);

CREATE TABLE userskills
(
    skill_id int FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
    user_id int FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- junction table

CREATE TABLE projectskills
(
    skill_id int FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
    project_id int FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE communities
(
   community_id int NOT NULL AUTO_INCREMENT,
   community_name varchar(30) NOT NULL,
   PRIMARY KEY (community_id),
   community_id int NOT NULL, FOREIGN KEY (project_id) REFERENCES projects(project_id),
);