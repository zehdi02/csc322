/* Created Table called regUser*/
--@block
CREATE TABLE regUser (
    userid INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) UNIQUE NOT NULL,
    Phone VARCHAR(20) NOT NULL
);
/* View table */
--@block
SELECT * FROM regUser;