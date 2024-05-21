// Create web server
    // Create a route for POST /comments
// Create a route for GET /comments

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json', 'utf-8'));
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.send('Comment added');
});

app.get('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json', 'utf-8'));
  res.send(comments);
});

app.listen(3000, () => console.log('Server running on port 3000'));