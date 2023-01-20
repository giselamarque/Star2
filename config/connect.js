const sequlize = require('sequelize');
const db = new sequlize('database',
'username',
'password', {
host: 'localhost',
dialect: 'mysql'
});
module.exports = db;

