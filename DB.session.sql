/* Run all blocks in your created db so that we can all 
have a local copy of the db*/
--@block
CREATE TABLE registered_user (
  Userid INT PRIMARY KEY AUTO_INCREMENT,
  Email VARCHAR(255) NOT NULL,
  Firstname VARCHAR(50) NOT NULL,
  Lastname VARCHAR(50) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  mobile_phone_number VARCHAR(20) NOT NULL
);

--@block
ALTER TABLE registered_user
ADD CONSTRAINT unique_email
UNIQUE (email);

/* Using the below block you can view a table in the DB */
--@block
SELECT * FROM registered_user;