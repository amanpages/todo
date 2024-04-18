const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Update with your MySQL password
  database: 'TODO' // Update with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Fetch todos from the database
app.get('/todos', (req, res) => {
  const query = 'SELECT * FROM todos';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching todos from MySQL database: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Add a new todo to the database
app.post('/todos', (req, res) => {
  const todoText = req.body.text;

  if (!todoText) {
    return res.status(400).json({ error: 'Todo text is required' });
  }

  const query = 'INSERT INTO todos (text) VALUES (?)';
  connection.query(query, [todoText], (err, result) => {
    if (err) {
      console.error('Error adding todo to MySQL database: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('Added new todo to the database');
    res.status(201).json({ message: 'Todo added successfully' });
  });
});

// Delete a todo from the database
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM todos WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting todo from MySQL database: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(`Deleted todo with id ${id}`);
    res.sendStatus(204);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
