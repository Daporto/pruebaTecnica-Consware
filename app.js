const express = require('express');
const usersRouter = require("./src/routes/users");
const tasksRouter = require("./src/routes/tasks");
const app = express();
const port = 3000;
const database = require('./src/database/');
database.init();
app.use(express.json());

app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})