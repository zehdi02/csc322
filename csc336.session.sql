--@block
ALTER TABLE regUser
ADD COLUMN Wallet DECIMAL(10, 2) DEFAULT 0.00;
--@block
SELECT * FROM regUser;

--@block
UPDATE regUser SET Wallet = 1 WHERE userid = 1;

--@block 
CREATE TABLE UNPAccounts(
    userid INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Phone VARCHAR(20) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL UNIQUE
    );

--@block
SELECT * FROM UNPAccounts;