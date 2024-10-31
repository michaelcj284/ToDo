const bodyParser = require('body-parser');
const express = require('express');
const Joi = require('joi');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let todos = [];

// Routes
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todo = {id: Date.now(), text: req.body.text, completed: false};
        todos.push(todo);
        res.status(201).json(todo);
});

app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);
    if (todo) {
        todo.complete = req.body.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/todos/:id' , (req, res) => {
    todos = todos.filter(t => t.id != req.params.id);
    res.status(204).send();
});


const port = process.env.PORT || 5000; // get the port from the environment variable or use 5000

console.log(port);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});