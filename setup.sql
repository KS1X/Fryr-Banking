-- Create a new database named "banking_system" (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS banking_system;
USE banking_system;

-- Create the "member_accounts" table with the specified columns
CREATE TABLE IF NOT EXISTS member_accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    checking_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    savings_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    money_market_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

-- Sample data for testing purposes (you can remove or modify these)
INSERT INTO member_accounts (first_name, last_name, username, password, checking_amount, savings_amount, money_market_amount)
VALUES
    ('John', 'Doe', 'john_doe', 'hashed_password', 1500.00, 3000.00, 5000.00),
    ('David', 'Smith', 'David_smith', 'hashed_password', 2000.00, 4000.00, 8000.00);
