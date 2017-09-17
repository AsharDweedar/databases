CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  message TEXT,
  ID int ,
  user_id int ,
  room_id int ,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id),
  FOREIGN KEY (room_id)
);	

/*SHOW DATABASE chat;*/
/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  name TEXT ,
  ID int ,
  PRIMARY KEY (ID)
);	

CREATE TABLE rooms (
  /* Describe your table here.*/
  ID int ,
  name TEXT ,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

