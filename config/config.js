require('dotenv').config(); // this is important!
module.exports = {
  "innovation-lab": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "local": {
    "username": "laas-user",
    "password": "laas@123",
    "database": "laasdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};