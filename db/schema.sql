-- Create the DB 
DROP SCHEMA IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the burgers table 
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);