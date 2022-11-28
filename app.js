const express = require('express');
const superheroRoutes = require('./src/routes/superhero-route');

const app = express();

app.listen(8081, () => {
  console.log(`Server is listening on port 8081`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/superhero', superheroRoutes);

module.exports = app;
