const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware for parsing JSON data from requests
app.use(bodyParser.json());
// Middleware for parsing form data from requests
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to fetch all accounts
app.get('/api/accounts', (req, res) => {
  const sql = 'SELECT account_id, first_name, last_name FROM member_accounts';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching accounts: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// API endpoint to handle money transfer
app.post('/api/transfer', (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;

  // Perform validation for the input data here (e.g., checking if the accounts exist, if there are sufficient funds, etc.)

  // For this example, we'll just show a success message.
  res.json({ message: `Transferred $${amount} from Account ID ${fromAccount} to Account ID ${toAccount}.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
