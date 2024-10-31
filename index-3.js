const express = require('express');

const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const userRoutes = require('./routes/userRoutes');

// app.set('view engine', 'pug');
const app = express();

app.use(express.json());
app.use(logger);
app.use(auth);

app.use("/api/v1/users", userRoutes);

// app.use(express.static('public'));

// app.use("/api/admin" ,(req, res, next) => {
//     req.user = "admin"
//     console.log("Admin middleware");
//     next();
// })

// app.get('/', (req, res) => {
//     res.render('index', { title: 'Hey', message: 'Hello there!', content: 'This is the content of my page' })
//   })


const port = process.env.PORT || 5000; // get the port from teh environment variable or user 5000

console.log(port);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


