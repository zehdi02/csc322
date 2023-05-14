--@block
ALTER TABLE regUser
ADD COLUMN Wallet DECIMAL(10, 2) DEFAULT 0.00;
--@block
SELECT * FROM regUser;

--@block
UPDATE regUser SET Wallet = 1 WHERE userid = 1;