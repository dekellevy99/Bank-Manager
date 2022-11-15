CREATE DATABASE IF NOT EXISTS transactionsdb;
use transactionsdb;

-- -------------------------------------
--         CREATING TABLES        
-- -------------------------------------

CREATE TABLE IF NOT EXISTS User(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    balance INT
);

CREATE TABLE IF NOT EXISTS Transaction(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    vendor VARCHAR(50),
    category VARCHAR(50),
    amount INT,
    userId INT,

    FOREIGN KEY(userId) REFERENCES User(id) 
);



-- -------------------------------------
--         INIT TABLES        
-- -------------------------------------
INSERT INTO User VALUES(null, 'Dekel', 10000);
INSERT INTO User VALUES(null, 'Yagel', 8000);


INSERT INTO Transaction(vendor, category, amount, userId) VALUES("Cyber", "salary", 2000, 1);
INSERT INTO Transaction(vendor, category, amount, userId) VALUES("Menora", "salary", 3000, 2);
INSERT INTO Transaction(vendor, category, amount, userId) VALUES("Kampai", "food", 200, 2);
INSERT INTO Transaction(vendor, category, amount, userId) VALUES("Bus", "transport", 100, 1);