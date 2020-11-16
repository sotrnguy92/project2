DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE todos (
    id INT AUTO_INCREMENT NOT NULL,
    todo VARCHAR(255) NOT NULL,
    userId INT references users(id),
    PRIMARY KEY(id)
);
