--@block
ALTER TABLE regUser
ADD COLUMN Wallet DECIMAL(10, 2) DEFAULT 0.00;
--@block
SELECT * FROM regUser;
