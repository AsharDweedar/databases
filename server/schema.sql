CREATE DATABASE chat;

USE chat;
CREATE TABLE messages (
	id INT AUTO_INCREMENT PRIMARY KEY,
	 message VARCHAR(255), user_id INT FOREIGN key,
	 room_id INT FOREIGN key
	 )
/*
CREATE TABLE messages (
  message VARCHAR(255),
  ID INT ,
  user_id INT ,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id),
);	

/*SHOW DATABASE chat;*/
/* Create other tables and define schemas for them here! */
-- CREATE TABLE users (
--   /* Describe your table here.*/
--   name TEXT ,
--   ID int ,
--   PRIMARY KEY (ID)
-- );	

-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   ID int ,
--   name TEXT ,
--   PRIMARY KEY (ID)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

