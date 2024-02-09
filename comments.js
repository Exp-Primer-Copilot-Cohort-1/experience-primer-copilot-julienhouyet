// Create web server
// 1. Require express
// 2. Create a new instance of express
// 3. Require bodyParser
// 4. Use bodyParser.json
// 5. Create an array of comments
// 6. Create a route to get all comments
// 7. Create a route to post a new comment
// 8. Create a route to get a specific comment
// 9. Create a route to update a specific comment
// 10. Create a route to delete a specific comment
// 11. Listen on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [
    { username: 'Tom', comment: 'Wow!'},
    { username: 'Mary', comment: 'Great!'}
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.get('/comments/:id', (req, res) => {
    res.json(comments[req.params.id]);
});

app.put('/comments/:id', (req, res) => {
    const comment = req.body;
    comments[req.params.id] = comment;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    comments.splice(req.params.id, 1);
    res.json({message: 'The comment has been deleted'});
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});