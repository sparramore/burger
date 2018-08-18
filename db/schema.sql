DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
