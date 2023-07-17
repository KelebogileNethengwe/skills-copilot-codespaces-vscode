// Create web server
// 1. Create web server
// 2. Read comments.json
// 3. Display comments.json
// 4. Create form
// 5. Handle form submission
// 6. Save form data to comments.json
// 7. Redirect to comments page
// 8. Display comments.json
// 9. Add comments.json to .gitignore
// 10. Deploy to Heroku

// 1. Create web server
// 1a. Import modules
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

// 1b. Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 1c. Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// 2. Read comments.json
// 2a. Create comments.json
// 2b. Read comments.json
// 2c. Display comments.json
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Unable to read comments');
    } else {
      res.send(data);
    }
  });
});

// 3. Display comments.json
// 3a. Display comments.json
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Unable to read comments');
    } else {
      res.send(data);
    }
  });
});

// 4. Create form
// 4a. Create form
app.get('/form', (req, res) => {
  res.send(`
    <form action="/comments" method="POST">
      <input type="text" name="comment">
      <input type="submit">
    </form>
  `);
});

// 5. Handle form submission
// 5a. Handle form submission
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

// 6. Save form data to comments.json
// 6a. Save form data to comments.json
app.post('/comments

