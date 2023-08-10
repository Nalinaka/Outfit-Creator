//Dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize')

//Configuration
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Sequelize Connection
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// Root
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
