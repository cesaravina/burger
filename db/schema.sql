CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY(id)
);











